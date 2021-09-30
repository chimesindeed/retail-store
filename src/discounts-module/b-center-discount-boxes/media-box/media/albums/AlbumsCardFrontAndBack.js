 import React from 'react'
 import ReactCardFlip from 'react-card-flip'
 import {AlbumsComponent} from './AlbumsComponent'
 import {AlbumsInputComponent} from './AlbumsInputComponent'
 
 export default class AlbumsCardFrontAndBack extends React.Component{
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
                    <AlbumsComponent/>
                </div>

                <div key="back" onDoubleClick={this.handleClick}>
                    <AlbumsInputComponent/>
                </div>
            </ReactCardFlip>
        )
    }
}