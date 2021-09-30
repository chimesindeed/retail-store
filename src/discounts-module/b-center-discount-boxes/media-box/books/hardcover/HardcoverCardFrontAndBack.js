 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {HardcoverComponent} from './HardcoverComponent'
 import {HardcoverInputComponent} from './HardcoverInputComponent'
 
 export default class HardcoverCardFrontAndBack extends React.Component{
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
                    <HardcoverComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <HardcoverInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}