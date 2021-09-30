 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {ChildrensComponent} from './ChildrensComponent'
 import {ChildrensInputComponent} from './ChildrensInputComponent'
 
 export default class ChildrensCardFrontAndBack extends React.Component{
    constructor(){
        super()
        this.state= {
            isFlipped: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render(){
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div key = 'front' onDoubleClick={this.handleClick}>
                    <ChildrensComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <ChildrensInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}