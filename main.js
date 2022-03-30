import { createDom } from './src/index.ts'
const head = require('./src/assets/header.png')
const img = document.createElement('img')
img.style.width = '200px'
img.src = head
document.body.appendChild(createDom())
document.body.appendChild(img)
console.log('i am going ')