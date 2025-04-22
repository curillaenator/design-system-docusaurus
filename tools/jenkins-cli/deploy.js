require('dotenv').config();
require('dotenv-safe').config();

//eslint-disable-next-line
const fs = require('fs');
const path = require('path');
const util = require('util');
const https = require('https');
const axios = require('axios');
const retry = require('async-retry');
const childProcessExec = require('child_process').exec;

const {EDU_CERTIFICATION_PASSWORD, EDU_JENKINS_TOKEN, EDU_JENKINS_USERNAME} = process.env;

const certificationsPath = path.resolve(__dirname, './certifications');

const JOB_NAME = 'z-debug-front-libs-publish-nexus';
const API_URL = `https://jenkins.pcbltools.ru/job/newschool-bb/job/${JOB_NAME}`;
const retryCount = 3;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  cert: fs.readFileSync(`${certificationsPath}/client.pem`, 'utf-8'),
  key: fs.readFileSync(`${certificationsPath}/key.pem`, 'utf-8'),
  passphrase: EDU_CERTIFICATION_PASSWORD
});

const AUTH = {
  username: EDU_JENKINS_USERNAME,
  password: EDU_JENKINS_TOKEN
};

const exec = util.promisify(childProcessExec);

main().catch(err => {
  console.error(err);
  process.exit(1)
});


async function main() {
  const currentBranchName = await getCurrentGitBranch();

  await triggerDeploy(currentBranchName);
  process.exit(0);
}

async function getCurrentGitBranch() {
  let currentBranchName = '';

  try {
    currentBranchName = await getCurrentBranch();
  } catch(err) {
    console.log('Ошибка при использовании команды "git branch"');
    console.log(e);
    process.exit(1);
  }

  return currentBranchName;
}

async function triggerDeploy(currentBranchName){
  try {
    await retry(async bail => {

      try {
        const {status} = await axios({
          method: 'post',
          url: `${API_URL}/build`,
          params: {
            json: {
              'parameter': [
                {
                  'name': 'branch',
                  'value': currentBranchName
                },
                {
                  'name': 'standName',
                  'value': 'dev29'
                },
                {
                  'name': 'Kubernets_branch_config',
                  'value': 'develop'
                }
              ]
            }
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          auth: AUTH,
          httpsAgent
        });

        if (status === 403) {
          bail(new Error('Unauthorized'));
          process.exit(0);
          return;
        }
      } catch(err) {
       console.log(err)
       process.exit(0);
      }

      const {data: lastBuildData} = await axios({
        method: 'get',
        url: `${API_URL}/lastBuild/api/json`,
        auth: AUTH,
        httpsAgent
      });

      // API jenkins не позволяет получить последнюю жобу по названию ветки
      // поэтому ищем ветку и сравниваем
      // если названия веток (редкий кейс - если только два разработчика стартанули джобу в один момент) не совпадают, делаем retry
      const remoteBranchJenkins = lastBuildData.actions.find(({ parameters }) => !!parameters).parameters.find(({ name }) => name === 'branch').value;

      if (remoteBranchJenkins !== currentBranchName) {
        throw new Error('Remote branch и branch Jenkins не совпадают')
      }

      console.log('----');
      console.log(`CI pipeline url for ${remoteBranchJenkins}:`);
      console.log('----');
      console.log(lastBuildData.url);
    }, {
      retries: retryCount
    })
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
}

async function getCurrentBranch() {
  const branchesOutput = await exec('git branch');
  if (branchesOutput.stderr){
    throw new Error(stderr);
  }
  const branches = branchesOutput.stdout;
  return branches.split('\n').find(b => b.trim().charAt(0) === '*' ).trim().substring(2);
}
