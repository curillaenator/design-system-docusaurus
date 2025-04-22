# Скрипт для запуска пайплайна в jenkins (запускать после последнего комита)

# Как использовать

В директории front/ в терминале:

```sh
$ cp .env.example .env
```

В директории front/jenkins-cli/certifications поместить полученные сертификаты client.pem и key.pem.
(данная директория добавлена в .gitignore исходя из безопасности)

# Задать переменные значениями в .env

`EDU_CERTIFICATION_PASSWORD` - пароль от сертификата (ресурсы ШЦП)
`EDU_JENKINS_USERNAME` - логин в JENKINS
`EDU_JENKINS_TOKEN` - личный токен от JENKINS

# Как получить `EDU_JENKINS_TOKEN`?

Для получения пройти по ссылке и сгенерировать токен:

https://jenkins.pcbltools.ru/user/YOUR_USERNAME/configure

После последнего комита запустить:

```sh
$ yarn publish:cli
```

Скрипт автоматически запускает пайплайн и в консоле выводит ссылку, которую нужно прикрепить к ПР, а также пушит в репозиторий

Ограничения: Ветка обязательно должна уже существовать в remote репозитории edupower
