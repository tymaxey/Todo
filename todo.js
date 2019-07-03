var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

//It should have a function to display todos.
function displayTodos() {
    console.log('My todos:', todos);
}

//It should have a function to add todos.
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//It should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//It should have a function to delete todos.
function deleteTodo(position) {
    todos.splice(position, 1);
}