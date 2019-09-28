import React, { Component } from 'react'
import Box from "./Box"
import BoxForm from './BoxForm'

class Boxlist extends Component {

    constructor(props) {
        super(props);
        this.state = {boxes: []}
        this.create = this.create.bind(this)
    }
    remove(id){
        this.setState({
            boxes: [...this.state.boxes.filter(box => box.id !==id)]
        })
    }
    create(NewBox){
        this.setState({
            boxes: [...this.state.boxes , NewBox]
        });
    }
    render() {
        const boxes =this.state.boxes.map(box =>
            <Box 
            key={box.id}
            id={box.id}   //to remove box
            width={box.width}
            height={box.height}
            color={box.color}
            removeBox={() =>this.remove(box.id)}
            />)
        return (
            <div>
                <h1>Box Maker</h1>
                {boxes}
                <BoxForm  createBox= {this.create }/>
               

            </div>
        )
    }
}

export default Boxlist;