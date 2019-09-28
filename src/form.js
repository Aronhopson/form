import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", qty: "" }
        this.handlChnage = this.handlChnage.bind(this)
        this.handlSub = this.handlSub.bind(this)


    }
    handlChnage(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handlSub(evt) {
        evt.preventDefault(); // to prevent server to load
        this.props.addItem(this.state);
        this.setState({ name: " ", qty: "" })
    }


    render() {
        return (
            <div>
                <h1>This form</h1>
                <form onSubmit={this.handlSub}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handlChnage}
                        name="name"
                    ></input>

                    <label htmlFor="qty">QTY</label>
                    <input type="text"
                        value={this.state.qty}
                        onChange={this.handlChnage}
                        name="qty"
                        placeholder="qty"
                    ></input>

                    <button >Add</button>
                </form>
            </div>
        )
    }
}

export default Form;