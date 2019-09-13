import React, { Component } from 'react';

class Formmulti extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' };
        this.handleChnage = this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChnage(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleSubmit(evt) {
        this.setState({ username: " " })
    }

    render() {
        return (
            <div>
                <h1>Form Multi input</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder=" name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChnage}>
                    </input>
                    <input type='password'
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChnage}>

                    </input>

                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
export default Formmulti;