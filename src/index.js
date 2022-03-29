function createDom(text = 'hellow webpack') {
  const div = document.createElement("div")
  div.innerText = text
  return div
}
document.body.appendChild(createDom())
