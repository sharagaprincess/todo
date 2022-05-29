import { makeAutoObservable } from "mobx";

class TodoStore{
    todos = []
    toShow = 'all'

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(newTodo){
        this.todos.push(newTodo)
    }

    deleteTodo(id){
        this.todos = this.todos.filter(el => el.id !== id)
    }

    completeTodo(todo){
        todo.completed = !todo.completed 
    }

    setToShow(value){
        this.toShow = value
    }

    get completedTodosCount(){
        return this.todos.filter(el => el.completed).length
    }

    get completedTodos(){
        return this.todos.filter(el => el.completed)
    }

    get incompletedTodosCount(){
        return this.todos.filter(el => !el.completed).length
    }

    get incompletedTodos(){
        return this.todos.filter(el => !el.completed)
    }
}

export default new TodoStore()