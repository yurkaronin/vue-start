# Vue CLI Beginning 

Для начала работы с VUE CLI потребовалось обновить версию NODE.JS: [https://nodejs.org/ru/download/]

Затем я открыл установленный на ПК GIT BASH и ввёл команду:

    npm install -g @vue/cli
    или
    yarn global add @vue/cli

В ответ на это увидел в консоли предупреждения: ![скриншот консоли при установке vue cli](/demo/Screenshot_1.jpg)

Но по итогу всё благополучно установилось и в следующей команде я запросил информацию про установленные версии:

    $ vue --version
    @vue/cli 5.0.6

    $ node --version
    v16.15.1

    $ npm --version
    npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
    8.11.0

Решил пофиксить ошибки и нашёл в интернете следующее решение:

1. Открыть windows PowerShell
2. Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
3. npm install --global --production npm-windows-upgrade
4. npm-windows-upgrade --npm-version latest

Отлично! ![скриншот результата выполнения команд](/demo/Screenshot_4.jpg)

Используя команду vue create vue create vue-cli
настроил и установил vue cli: предупреждения: ![скриншот консоли при установке vue cli](/demo/Screenshot_5.jpg)

Настройки конфигурации не сохранял, так как в разные проекты требуют разных параметров установки приложения.

После успешной установки приложения консоль предложила мне ввести команду запуска локального сервера:

   npm run serve

 Для просмотр готового приложения в веб-браузере нужно перейти по адресу: [http://localhost:8080/] или [http://192.168.0.106:8080/].
 При этом в браузере отображается вот такая страница: ![внешний вид приложения в баузере](/demo/Screenshot_7.jpg)

## Структура приложения

![структура приложения](/demo/Screenshot_6.jpg)
