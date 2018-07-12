import Vue from 'vue';
import App from './components/App.vue';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import './components/App.scss';

new Vue({
  el: '#App',
  render: h => h(App)
});