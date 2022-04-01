import { createDom } from './src/index.ts'
import(/* webpackPrefetch: true */'./src/js/methods') // webpack 预获取模块
import(/* webpackPreload: true */ './src/js/common')  //webpack 预加载模块

const head = require('./src/assets/header.png')
const img = document.createElement('img')
img.style.width = '200px'
img.src = head
document.body.appendChild(createDom())
document.body.appendChild(img)
// console.log('i am going in webpack-dev-middleware ')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered', registration)
    })
      .catch(err => {
        console.log('SW registration faild:', err)
      })
  })
}
