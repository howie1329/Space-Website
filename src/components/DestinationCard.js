import React from 'react';
import './DestinationCard.css'


function DestinationCard(props){
    return(
    <div className = 'card-container'>
        <h2 id = 'card-header'>01 Pick your destination</h2>
        <img id = 'card-image' src = {props.image} alt = 'images'></img>
        <p id = 'card-name'>{props.name}</p>
        <p id = 'card-body'>{props.body_text}</p>
        <p id = 'card-distance'>AVG. DISTANCE <br/> <span id = 'distance-number'>{props.distance}</span></p>
        <p id = 'card-travel'>EST. TRAVEL TIME <br/> <span id = 'travel-number'>{props.travel_time}</span></p>
    </div>)
}

export default DestinationCard;