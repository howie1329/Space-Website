import React from "react";
import './Home.css'
import Homebody from "./Homebody";

function Home(){
    return(
        <div className = 'home-container' >
            <div className = 'home-body'>
                <Homebody />
            </div>
        </div>
    )
}

export default Home;