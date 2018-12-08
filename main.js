new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: [
            {   
                done: false,
                text: 'do smth'
            },
            {   
                done: false,
                text: 'do smth'
            },
            {   
                done: true,
                text: 'done'
            }
        ]    
    },
    methods: {
        addTodo: function() {
            this.todos.push({done: false, text: this.todo})
        }
    }
})