
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import './assets/css/style.css'
Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});