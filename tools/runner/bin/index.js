#!/usr/bin/env node
const { spawn } = require('cross-spawn');

const chalk = require('chalk');
const inquirer = require('inquirer');
const transfromSubDirs = require('./helpers/transfromSubDirs');

const questions = [
  {
    type: 'list',
    name: 'main_dir',
    message: 'Основная директория пакета',
    choices: [
      { name: chalk.cyan('ui'), value: 'ui' },
      { name: chalk.green('charts'), value: 'charts' },
      { name: chalk.gray('widgets'), value: 'widgets' },
      { name: chalk.red('theme'), value: 'theme' },
      { name: chalk.magenta('xyz'), value: 'xyz' },
    ],
  },
  {
    type: 'input',
    name: 'sub_dir',
    message: 'субдиректория компонента, по умолчанию, будут запущены все стори в главной дир-и',
    default: '',
  },
  {
    type: 'confirm',
    name: 'doc',
    message: 'Cгенерировать knobs/документацию? По умолчанию false',
    default: false,
  },
];

inquirer.prompt(questions).then((params) => {
  const mainDir = params.main_dir;
  const fullDir = params.sub_dir ? `/${transfromSubDirs(params.sub_dir, mainDir)}` : '';

  const runStorybook = spawn(
    'yarn',
    ['cross-env', 'STATIC_ROOT=/', `COMPONENT=${fullDir}`, `GEN_DOC=${params.doc}`, 'start-storybook', '-s', './public', '-p', '6060'],
    { cwd: '../../../' },
  );

  runStorybook.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  runStorybook.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  runStorybook.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
