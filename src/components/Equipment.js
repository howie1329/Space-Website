import React from "react";
import './Equipment.css'

function Equipment(props){
    return(
        <div className = 'tech-container'>
            <h1 id = 'tech-header'>03 SPACE LAUNCH 101</h1>
            <p id = 'tech-title'>THE TERMINOLOGY...</p>
            <p id = 'tech-name'>{props.name}</p>
            <p id = 'tech-info' >{props.info}</p>
            <img id = 'tech-image' src = {props.image} alt ='images'/>
        </div>
    )
}

export default Equipment;