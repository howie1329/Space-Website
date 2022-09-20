import React from "react";
import {Link, Outlet} from "react-router-dom";
import './Destination.css'



function Destination(){
    return(
    <div className = 'destination-container'>
        <div className = 'destination-header'>
            <div id = 'destination-links'>
                <Link id = 'links' to = '/destination/moon'>Moon</Link>
                <Link id = 'links' to = '/destination/mars'>Mars</Link>
                <Link id = 'links' to = '/destination/europa'>Europa</Link>
                <Link id = 'links' to = '/destination/titan'>Titan</Link>
            </div>
        </div>
        <div className = 'destination-body'>
            <Outlet />
        </div>
    </div>
        )
}

export default Destination;