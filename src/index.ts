import './css/index.css'
export function createDom(text: string = 'hellow webpack') {
  const div = document.createElement("div")
  div.innerText = text
  return div
}
