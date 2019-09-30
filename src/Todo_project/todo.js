import React , {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state= {
            isEditing : false,
            task : this.props.task
        }
       this.handlRmove=this.handlRmove.bind(this)
       this.handleChange=this.handleChange.bind(this)
       this.handleUpdate= this.handleUpdate.bind(this)
       this.togleForm= this.togleForm.bind(this)
    }

    handlRmove(){
        this.props.removeTodo(this.props.id) 
    }
    togleForm(){
        this.setState({ isEditing : !this.state.isEditing})
    }
    handleChange(evt){
        this.setState ({
            task : evt.target.value        })


    }
    handleUpdate(evt){
        evt.preventDefault();
        //take new task dat and pass it to parents
        this.props.updateTaskTodos(this.props.id, this.state.task)
        this.setState({ isEditing :false})
    }
    render(){
       let result;
        if(this.state.isEditing ){
            result = (
                <div>
                    <form
                    onSubmit ={this.handleUpdate}>
                        <input 
                        type="text"
                        value ={this.state.task}
                        name ="task"
                        onChange = {this.handleChange}
                        ></input>
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result =(
                <div>
                <button onClick ={this.togleForm}>EDIT</button>
                <button onClick={this.handlRmove}>XXXX</button>
                <li>{this.props.task}</li>
            </div>
            )
        }

        return result;     
        
    }
}
export default Todo