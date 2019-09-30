import React, { Component } from 'react'
import Todo from './todo'
import Form from './todoform'

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, updateTask) {    //id to find and update
  const updatetodos = this.state.todos.map(todo => {
      if(todo.id === id){
          return {...todo, task : updateTask}
      }
      return todo
  })
this.setState ({todos : updatetodos})
} 
    render() {
        const todos = this.state.todos.map(todo => {
            return (
            <Todo
             key={todo.id} 
            id={todo.id} 
            removeTodo={this.remove} 
            updateTaskTodos = {this.update}
            task={todo.task} 
            
            />
            )
        })
        return (
            <div>
                <h1>Todolist</h1>

                <ul>
                    <Form createForm={this.create} />
                    {todos}
                </ul>
            </div>
        )
    }
}

export default Todolist