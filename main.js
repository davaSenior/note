let todosArray = localStorage.getItem('todos') === null
? []
: [ ...JSON.parse(localStorage.getItem("todos"))]

addBtn.addEventListener( 'click', addTodo )

const createItem = (todo, id) => {   
   let items = 
   `
   <li key="${id}" class="${todo.checked ? 'taskItem done' : 'taskItem'}">
   ${todo.text} ${todo.date ? todo.date : ''}
   <img class="btn" src="./img/d.png" onclick="doneTodo(event)" />
   <img class="btn" src="./img/delete.png" onclick="deleteTodo(event)" /> 
   `
   return items
}

const renderTodo = () => {
    list.innerHTML = ''
    let items = []
    todosArray.length       
    ? todosArray.map( (todo, id) => {
        items.unshift(createItem(todo, id))
        list.innerHTML = items.join(' ')
    } )
    : list.append( 'no tasks' )
}
renderTodo()


