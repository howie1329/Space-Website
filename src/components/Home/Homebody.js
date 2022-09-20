import React from "react";
import './Homebody.css'
import {Link} from "react-router-dom";

function Homebody(){
    return(
        <div className = 'body-container'>
            <p id = 'body-text'> 
            <span id = 'space-top-text'>So, you want to travel to</span> 
            <br /> 
            <span id = 'space-text'>Space</span> 
            <br />
            <span id="space-body-text">
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </span>
            </p>

            <Link id = 'explore-button' to = './destination'>EXPLORE</Link>
        </div>
    )
}

export default Homebody;