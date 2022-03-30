import './css/index.css'
const head = require('./assets/header.png')
console.log(head)
function createDom(text) {
  const div = document.createElement("div")
  div.innerText = text
  return div
}
const img = document.createElement('img')
img.style.width = '200px'
img.src = head
document.body.appendChild(createDom('hellow'))
document.body.appendChild(img)
