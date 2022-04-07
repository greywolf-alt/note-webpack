console.log('assets files')
import header from '../assets/header.png'
console.log(header)
const image = new Image()
image.src = header
image.onload = () => {
  document.body.appendChild(image)
}