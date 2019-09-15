import React, { Component } from 'react'
class NewListItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", qyt: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    /** Send {name, quantity} to parent
     *    & clear form. */

    // handleSubmit(evt) {
    //   evt.preventDefault();
    //   this.props.addItem(this.state);
    //   this.setState({ name: "", qty: 0 });
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name : </label>
                    <input
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <label htmlFor="qyt"> Qyt : </label>
                    <input
                        id="qyt"
                        name="qyt"
                        value={this.state.qyt}
                        onChange={this.handleChange}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewListItemForm;