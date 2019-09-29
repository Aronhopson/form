import React, {Component} from 'react'
import Todo from './todo'
import Form  from './todoform'

class Todolist extends Component{

    constructor(props){
        super(props);
        this.state = { todos :[{task: "awdwada"}, {task : "awdawdawdwadwadawd"}]}
        this.create =this.create.bind(this);
    }
    create(newTodo){
        this.setState({
            todos : [ ...this.state.todos, newTodo]
        })
    }
    render(){
       const todos=  this.state.todos.map(todo => {
            return <Todo task ={todo.task}/>
        })
        return(
            <div>
                <h1>Todolist</h1>
            
                <ul>
                    <Form createForm = {this.create}/>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default Todolist