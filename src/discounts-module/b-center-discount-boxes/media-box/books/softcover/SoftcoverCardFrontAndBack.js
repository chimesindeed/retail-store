 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {SoftcoverComponent} from './SoftcoverComponent'
 import {SoftcoverInputComponent} from './SoftcoverInputComponent'
 
 export default class SoftcoverCardFrontAndBack extends React.Component{
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
                    <SoftcoverComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <SoftcoverInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}