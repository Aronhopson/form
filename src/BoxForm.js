import React, { Component } from 'react'
import uuid from 'uuid/v4'

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: "", width: "", color: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }
    handlesubmit(evt) {
        evt.preventDefault();
        const NewBox ={...this.state, id:  uuid()}
        this.props.createBox(NewBox);
        this.setState({ height: "", width: "", color: "" })
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (
            <div>
                <h1>This is form</h1>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            value={this.state.height}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="width">Width</label>

                        <input
                            type="text"
                            name="width"
                            id="width"
                            value={this.state.width}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input
                            type="text"
                            name="color"
                            id="color"
                            value={this.state.color}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <button>Add New</button>
                </form>
            </div>
        )
    }
}

export default BoxForm