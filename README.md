# vue-start

 Учебные проекты на VUE

Установил плагин для VSCODE: <https://marketplace.visualstudio.com/items?itemName=octref.vetur>
Для подсветки синтаксиса vue.

Для браузера поставил расширение: <https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en-US>
для отслеживания событий в окне браузера.

Первое приложение самое простое.
Для начала создаю простую шаблонную разметку в html-файле
Подключаю vue через CDN (это временно).
Подключаю в теге \<head>

    <script src="https://unpkg.com/vue"></script>

1. Создаю рабочую область для конструкции vue
2. инициализирую область
3. затем передаю первый тестовый параметр в содержимое заголовка шаблона страницы.

        <body>
        <div id="app">
            <h1> {{ title }} </h1>
        </div>

        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    title: 'Vue init 2'
                    })
        </script>
        </body>

Тут столкнулся с первой проблемой в виде различий в конструкции инициализации в 2й и 3й версии vue.
В ходе экспериментов я понял, что уроки с курса, который я сейчас прохожу - по 2й версии.

в DATA храним данные.
Для обращения к этим данным нам нужно использовать конструкцию вида: {{ title }}
Это временное решение, пока я осваиваюсь с основами. Далее мы будем использовать более удобные способы хранения параметров.

## Динамическое изменение параметра через ввод данных в input с последующим выводом на страницу

Для передачи данных из поля в область на странице используем два объекта:

1. Поле ввода, которое размечаю:

        <label>
            Тестовое поле: <input type="text" v-model="text">
        </label>

2. дополнительного атрибута v-model который указываю в теге input

    Значение атрибута я использую для дополнения DATA в JS:

            data: {
        title: 'inputs',
        text: ''
        }

3. Дополнительной области в html, которую размечаю как текстовый блок с вложенным тегом span. В него уже знакомой конструкцией вставляю "шаблон":

        <p>Результат вывода данных из поля: <span> {{ text }} </span></p>

 После проделанной работы мы видим на странице как данные, которые мы вводим в поле ввода сразу же отображаются в текстовом блоке.

## Методы и события

Методы используем когда происходят события
События можно указывать в теле тегов. Для этого можно использовать полное выражение:

        v-on="getText"

или использовать сокращённый вариант записи этого выражения:

        @click="getText"

JS код с описанным событием выглядит так:

        var app = new Vue({
        // передаём идентификатор блока выделенного под приложение
        el: '#app',
        data: {
            title: 'inputs',
            text: ''
        },
        methods: {
            getText () {
            console.log('it works!');
            }
        }
        })

МОжно передавать в консоль и значение ведённое в поле ввода, для этого достаточно дополнить наш скрипт и в качестве вывода в консоль добавить:

        methods: {
            getText () {
            console.log(this.text);
            }
        }

Помимо методов есть еще и вычисления = computed
Это те же методы, но они завязаны на преобразовании данных - на вычислении, изменении внешнего вида данных и т п.
Используются когда требуется реагировать на ввод данных моментально

## Условная отрисовка

Директива v-if используется для рендеринга блока по условию.
Блок будет отображаться только в том случае, если выражение директивы возвращает значение, приводимое к true.

Для закрепления на практике использую дополнительные параметры в DATA:

        data: {
            title: 'v-if',
            showContent: true,
            text: '',
            lowerText: ''
        },
Если изменить значение showContent на false, то заголовок не будет отображаться. Это можно использовать на усмотрение проекта и текущих задач.