 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {TapesComponent} from './TapesComponent'
 import {TapesInputComponent} from './TapesInputComponent'
 
 export default class TapesCardFrontAndBack extends React.Component{
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
                    <TapesComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <TapesInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}