 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {SetsComponent} from './SetsComponent'
 import {SetsInputComponent} from './SetsInputComponent'
 
 export default class SetsCardFrontAndBack extends React.Component{
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
                    <SetsComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <SetsInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}