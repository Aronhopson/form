import React, { Component } from 'react'
import Form from './form';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [

                { name: "potato", qty: "11" },
                { name: "lily", qty: "1" }
            ]
        }
        this.addItem = this.addItem.bind(this)

    }
    addItem(item) {
        this.setState(st => ({
            items: [...st.items, item]
        }));
    }
    renderItem() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name} : {item.qty}
                    </li>
        ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>LIst</h1>
                {this.renderItem()}
                <Form addItem={this.addItem} />
            </div>
        )
    }
}
export default List;