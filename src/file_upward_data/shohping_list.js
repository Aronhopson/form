import React, { Component } from 'react'
import Shopping from './shoppingList_form'
import uuid from 'uuid/v4'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'milk', qyt: '2 gallons', id : uuid() },
                { name: 'bread', qyt: '2 piece', id : uuid() }

            ]
        };
        this.addItem = this.addItem.bind(this)
    }
    addItem(item){
        let NewItem= {...item, id : uuid()}
        this.setState(st =>({
            //take all item from ...st.items and add it to item i.e new Array
            items : [...st.items, NewItem]
        }))
    }
    renderItem() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key= {item.id}>
                        {item.name} : {item.qyt}
                       
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItem()}
                <Shopping addItem = {this.addItem}/>
            </div>
        );
    }
}
export default List;