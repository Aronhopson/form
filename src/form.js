import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {username: ''};
        this.handleChnage=this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChnage(evt){
        this.setState({username : evt.target.value})
    }
    handleSubmit(evt){
        this.setState({username: ""})
    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.username}
                    onChange={this.handleChnage}></input>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;