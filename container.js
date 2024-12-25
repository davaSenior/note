let main = document.createElement('div')
main.classList = 'container'
document.body.append(main)

let h1 = document.createElement('h1')
h1.innerHTML = 'todo-list'
main.append(h1)

let mainBlock = document.createElement('div')
mainBlock.classList = 'mainBlock'
main.append(mainBlock)

let div = document.createElement('div')
mainBlock.append(div)

let textIn = document.createElement('input')
textIn.classList = 'textIn'
textIn.setAttribute('placeholder', 'gonna do...')
div.append(textIn)

let setDate = document.createElement('input')
setDate.setAttribute('type', 'date')
setDate.style.outline = 'none'
setDate.style.border = 'none'
div.append(setDate)

let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'add'
addBtn.style.border = 'none'
div.append(addBtn)

let list = document.createElement('ul')
mainBlock.append(list)