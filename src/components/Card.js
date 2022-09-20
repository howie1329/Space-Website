import React from 'react';
import './Card.css'


function Card(props){
    return(
    <div className = 'card-container'>
        <h2 id = 'card-header'>01 Pick your destination</h2>
        <img id = 'card-image' src = {props.image} alt = 'images'></img>
        <p id = 'card-name'>{props.name}</p>
        <p id = 'card-body'>{props.body_text}</p>
    </div>)
}

export default Card;