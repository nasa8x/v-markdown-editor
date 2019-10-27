

import './layout.css';
import '../dist/v-markdown-editor.css';

import Vue from 'vue';
import App from './app.vue';
import Editor from '../dist';

Vue.use(Editor);

new Vue({
  el: '#app', 
 
  render: h => h(App)
})
