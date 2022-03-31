import './css/index.css'
import { test } from './js/methods'
export function createDom(text: string = 'hellow webpack') {
  const div = document.createElement("div")
  div.innerText = text
  return div
}
console.log('i am a index.ts ', test)
