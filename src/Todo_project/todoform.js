import React , {Component} from 'react'
import  uuid from 'uuid/v4'

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={task : ""}
        this.handleChange = this.handleChange.bind(this);
        this.handlesub = this.handlesub.bind(this)
    }
    handleChange(evt){
        this.setState ({
            [evt.target.name] : evt.target.value
        })
    }
    handlesub(evt){
        evt.preventDefault();
        this.props.createForm({...this.state, id :  uuid()}); 
        this.setState ({ task : " "})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handlesub}>
                    <label htmlFor="task">Todo</label>
                    <input 
                    type= "text"
                    placeholder= "kucbhi"
                    value={this.state.task}
                    name = "task"
                    id="task"
                    onChange = {this.handleChange}
                    ></input>
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}

export default Form