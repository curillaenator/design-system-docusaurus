import program, { Command } from 'commander';
import chalk from 'chalk';
import execa from 'execa';

function actionWrapper(actionRequireFunc: any, exportName: string): (...args: string[]) => Promise<never> {
  return async (...args: string[]) => {
    try {
      const module = await actionRequireFunc();
      const func = module[exportName];
      await func(...args);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
}

async function exec(cmd: string) {
  await execa(cmd, { stdio: 'inherit', shell: true });
}

const main = (argv: string[]) => {
  program.name('@PCBL:TOOLS-CLI');

  program
    .command('publish:manually')
    .description('Простановка версии пакета, ручная публикация пакета в npm: https://nexus-dev.pcbltools.ru')
    .option('-a, --alpha', 'Релиз alpha версии пакета')
    .option('-b, --beta', 'Релиз beta версии пакета')
    .option('--main', 'Ручной релиз основной версии пакета')
    .action(async (cmd: Command) => {
      let flag = '';
      flag = cmd.a || cmd.alpha ? 'alpha' : flag;
      flag = cmd.b || cmd.beta ? 'beta' : flag;
      flag = cmd.main ? 'main' : flag;
      await exec(`tools/fe-scripts/src/commands/publish-manually.sh ${flag}`);
    });

  program
    .command('pack')
    .description('Меняет в package.json пакета пути main,types на build/*, создает backup package.json для отката')
    .action(actionWrapper(() => import('./commands/pack'), 'prePack'));

  program
    .command('revertPack')
    .description('Возвращает пакет в исходное состояние, которое было до публикации (накатывает созданный backup в package.json)')
    .action(actionWrapper(() => import('./commands/pack'), 'revertPack'));

  program
    .command('checkDependencies')
    .description('Проверяет, что все нужные зависимости указаны в package.json пакета, нет phantom dependencies ')
    .option('--fix', 'Автоматическая простановка недостающих зависимостей в package.json пакета')
    .action(actionWrapper(() => import('./commands/checkDep'), 'default'));

  program
    .command('test')
    .description('Запускает unit тесты для пакета')
    .action(actionWrapper(() => import('./commands/test/test'), 'default'));

  program
    .command('syncPackages')
    .description('Обновляет конфиги сразу по всей группе пакетов')
    .option('-p, --path', 'Путь для группы пакетов')
    .action(actionWrapper(() => import('./commands/syncPackages'), 'default'));

  program
    .command('notifyInfo')
    .description('Парсит тэги для нотификации в slack канал')
    .action(actionWrapper(() => import('./commands/notifyInfo'), 'default'));

  program
    .command('generate:package')
    .description('Создать новый пакет с готовым шаблоном в директории packages/*')
    .action(actionWrapper(() => import('./commands/generatePackage/index'), 'default'));

  program
    .command('generate:types')
    .description('Генерация типов из токенов')
    .option('-c, --commit', 'Скрипт выполняется по сценарию коммита')
    .option('-m, --manual', 'Скрипт выполняется в ручном режиме')
    .action(async (cmd: Command) => {
      let flag = 'manual';
      flag = cmd.c || cmd.commit ? 'commit' : flag;
      flag = cmd.m || cmd.manual ? 'manual' : flag;
      await exec(`bash ${__dirname}/commands/generateTypes.sh ${flag}`);
    });

  program
    .command('clean')
    .description('Удалить директории build всех пакетов')
    .action(actionWrapper(() => import('./commands/clean'), 'default'));

  program
    .command('upgradeDeps')
    .description('Проверяет и обновляет устаревшие зависимости')
    .option('--fix', 'Обновить все устаревшие')
    .option('--showOutdate', 'Распечатать все устаревшие')
    .action(actionWrapper(() => import('./commands/upgradeDeps/index'), 'default'));

  program
    .command('icons:update')
    .description('Загрузить все иконки')
    .option('-f, --filename <char>', 'filename из которого будут браться иконки')
    .option('-n, --nodes <char>', 'Ноды из которых нужно спарсить иконки', '0:1')
    .option('-t, --token <char>', 'Токен для апи')
    .option('-d, --dist <char>', 'Директория выгрузки иконок')
    .option('--clear-cache', 'Сбросить кеш')
    .action(actionWrapper(() => import('./commands/updateIcons/index'), 'default'));

  program.on('command:*', () => {
    console.log();
    console.log(chalk.red(`Невалидная команда: ${chalk.cyan(program.args.join(' '))}`));
    console.log(chalk.red('Введи команду --help для списка доступных команд'));
    console.log();
    process.exit(1);
  });

  program
    .command('setVersion')
    .description('прописывает версию пакета в верстке')
    .action(actionWrapper(() => import('./commands/setVersion'), 'default'));

  program
    .command('replaceSassImportsWithCss')
    .description('меняет пути импорта к файлам *.sass на *.css')
    .action(actionWrapper(() => import('./commands/replaceSassImportsWithCss'), 'default'));

  program
    .command('replaceSrcToBuild')
    .description('меняет пути импорта к файлам /src/ на /build/')
    .action(actionWrapper(() => import('./commands/replaceSrcToBuild'), 'default'));

  program
    .command('updateVersions')
    .description('Обновление версий базовых пакетов для темных репозиториев')
    .option('-p, --patch', 'Смотрим изменения версий для патчей (По умолчанию минорные правки)')
    .action(actionWrapper(() => import('./commands/update-versions'), 'default'));

  program
    .command('icons:convert')
    .option('-p, --path <char>', 'Путь к иконкам')
    .option('-d, --dist [char]', 'Директория выгрузки иконок', '')
    .option('-r, --replace [char]', 'Директория выгрузки', false)
    .action(actionWrapper(() => import('./commands/updateIcons/convertToTsx/index'), 'convert'));

  program
    .command('icons:editMap')
    .option('-p, --path <char>', 'Путь к map файлам')
    .action(actionWrapper(() => import('./commands/updateIcons/convertToTsx/index'), 'editMap'));

  if (process.argv && !process.argv.slice(2).length) {
    program.outputHelp(chalk.yellow);
  }

  program.parse(argv);
};

process.on('unhandledRejection', (rejection) => {
  console.log(rejection);
});

main(process.argv);
