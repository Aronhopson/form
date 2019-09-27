import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" }
        this.handlChnage = this.handlChnage.bind(this)
        this.handlSub = this.handlSub.bind(this)


    }
    handlChnage(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handlSub(evt) {
        evt.preventDefault(); // to prevent server to load
       this.props.addItem(this.state);
        this.setState({ username: " ",  qty : "" })
    }


    render() {
        return (
            <div>
                <h1>This form</h1>
                <form onSubmit={this.handlSub}>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handlChnage}
                        name="username"
                    ></input>

                    <input type="password"
                        value={this.state.password}
                        onChange={this.handlChnage}
                        name="password"
                    ></input>

                    <input type="email"
                        value={this.state.email}
                        onChange={this.handlChnage}
                        name="email"
                    ></input>
                    <button >Add</button>
                </form>
            </div>
        )
    }
}

export default Form;