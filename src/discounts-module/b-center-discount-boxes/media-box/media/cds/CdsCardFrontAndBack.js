 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {CdsComponent} from './CdsComponent'
 import {CdsInputComponent} from './CdsInputComponent'
 
 export default class CdsCardFrontAndBack extends React.Component{
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
                    <CdsComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <CdsInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}