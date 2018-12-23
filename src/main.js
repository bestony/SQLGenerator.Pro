import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false

import Hljs from 'highlight.js'

Vue.directive('highlightjs', function() {
  let blocks = this.el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
