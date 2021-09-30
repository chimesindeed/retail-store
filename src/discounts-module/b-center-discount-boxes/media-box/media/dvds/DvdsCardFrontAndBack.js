 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {DvdsComponent} from './DvdsComponent'
 import {DvdsInputComponent} from './DvdsInputComponent'
 
 export default class DvdsCardFrontAndBack extends React.Component{
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
                    <DvdsComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <DvdsInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}