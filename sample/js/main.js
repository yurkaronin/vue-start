var app = new Vue({
  // передаём идентификатор блока выделенного под приложение
  el: '#app',
  data: {
    title: 'v-if',
    someText: false,
    text: '',
    lowerText: ''
  },
  methods: {
    getText () {
      console.log(this.text);

    }
  },
  computed: {

  },
})
