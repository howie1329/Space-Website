import React from "react";
import {Link} from "react-router-dom";



function Destinationpage(){
    return(
    <div className = 'destination-container'>
        <div className = 'destination-header'>
            <h2 id = 'destination-title'>01 PICK YOUR DESTINATION</h2>
        </div>
        <div className = 'destination-body'>
            <Link to = '/destination/card'>Card</Link>
        </div>
    </div>
        )
}

export default Destinationpage;