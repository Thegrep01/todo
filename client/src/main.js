import Vue from 'vue'
import App from './components/App.vue'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: 'app',
  created: function () {
    console.log('root created')
  },
  comments: {
    App
  },
  methods: {}
})
