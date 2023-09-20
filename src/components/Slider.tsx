import React, { useState } from 'react'
import ForumMainPhoto from '../images/forum-main.png';
import ForumStartPhoto from '../images/forum-start.png';
import { clear } from 'console';

interface ISlider {
    title : string,
    source : string[]
}

enum Direction {
    move = 'move',
    invert = 'invert'
}

export const Slider = ( props : ISlider ) => {

    const [transition,setTransition] = useState('0%')
    const [currentPosition,setCurrentPosition] = useState(0)
    const [direction, setDirection] = React.useState<Direction>(Direction.move);
    let count: number = props.source.length;
    let lastPhoto: number = -(count -1) * 100 ;

    const move = () =>{
            setTimeout(()=>{
                setCurrentPosition(currentPosition - 100)
                setTransition(`${currentPosition}%`)
            },4000)
    } 
    const invert = async() =>{
            setTimeout(()=>{
                setCurrentPosition(currentPosition + 100)
                setTransition(`${currentPosition}%`)
            },4000)
    } 

    if(direction === Direction.move && count != 1)
    {
        move();
        if(currentPosition == lastPhoto)
            setDirection(Direction.invert)
    }

    if(direction === Direction.invert){
        invert();
        if(currentPosition === 0 && count != 1)
            setDirection(Direction.move)
    }

    return (
        <div className="photo-slider">
            <div className="photo-container">
            {
                props.source.map( (element)=> {
                    return(
                        <img src={element} alt={`${props.title}`} style={{transform: `translate(${transition})`}} />
                    )
                })
            }
            </div>
        </div>
    )
}