var todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayTodos: function () {
        console.log("My Todos", this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

