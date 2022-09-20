import React from "react";
import './Person.css'

function Person(props){
    return(
        <div className = 'crew-container'>
            <h1 id = 'crew-header'>02 MEET YOUR CREW</h1>
            <p id = 'crew-title'>{props.title}</p>
            <p id = 'crew-name'>{props.name}</p>
            <p id = 'crew-info' >{props.info}</p>
            <img id = 'crew-image' src = {props.image} alt ='images'/>
        </div>

    )
}

export default Person;