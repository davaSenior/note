const addTodo = () => {
    let newTask = textIn.value
    let date= setDate.value
    if( newTask != '' ){
        todosArray.push({
            text: newTask,
            checked: false,
            date
        })
        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderTodo()
        textIn.value = ''
        setDate.value = ''
    }
}

const deleteTodo = (e) => {
    let index = Number(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodo()
}

const doneTodo = (e) => {
    let index = Number(e.target.parentNode.getAttribute('key'))
    let element = todosArray[index].checked
    let newTodo = [...todosArray]
    newTodo[index].checked = !element
    localStorage.setItem('todos', JSON.stringify(newTodo))

    let done = e.currentTarget.parentNode.classList.contains('done')
    done 
    ? e.currentTarget.parentNode.classList.remove('done')
    : e.currentTarget.parentNode.classList.add('done')
}