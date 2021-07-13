/*
 * @Author: your name
 * @Date: 2021-07-12 14:35:00
 * @LastEditTime: 2021-07-12 18:13:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \MyProject\shop\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/font.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
