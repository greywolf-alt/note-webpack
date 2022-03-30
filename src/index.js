import'./css/index.css'
import head from './assets/header.png'
function createDom(text = 'hellow webpack') {
  const div = document.createElement("div")
  div.innerText = text
  return div
}
const img = document.createElement(img)
img.src = head
document.body.appendChild(createDom())
document.body.appendChild(img)
