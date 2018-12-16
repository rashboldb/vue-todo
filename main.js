Vue.component('todo-item', {
    props: ['todo'],
    template: '<li @click="todo.done = true">{{ todo.text }}</li>'
})

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
            if (this.isValid) 
            this.todos.push({done: false, text: this.todo})
            this.todo = ''
        }
    },
    computed: {
        isValid: function() {
            if (this.todo.trim() == '') return false
            else return true
        }
    }
})
