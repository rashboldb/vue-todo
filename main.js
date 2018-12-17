Vue.component('todo-list', {
    props: ['todos'],
    template: `
            <ul>
                <li v-for="todo in todos" @click="todo.done=true">{{todo.text}}</li>
            </ul>
    `
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
        },
        uncompleted: function() {
            return this.todos.filter(todo => todo.done == false)
        },
        completed: function() {
            return this.todos.filter(todo => todo.done == true)
        }
    }
})
