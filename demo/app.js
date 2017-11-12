import Css from './css/layout.css'
import 'bootstrap'

import Vue from 'vue'
import App from './app.vue'
import router from './router';
import store from './store'
import Editor from '../src/index'

Vue.use(Editor);

const app = new Vue({
  el: '#app', 
  store,
  router,
  render: h => h(App)
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }