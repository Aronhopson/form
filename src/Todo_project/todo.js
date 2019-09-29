import React , {Component} from 'react'

class Todo extends Component{
    render(){
        return(
            <div>
                <button>X</button>
                <button>Edit</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}
export default Todo