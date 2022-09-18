import React from "react";
import logo from './logo.svg';
import './Header.css'
import {Link} from 'react-router-dom';


function Header(props){
    return(
        <div className = 'header-container'>
            <Link id="logo-image" to = '/'><img src={logo} alt = 'Logo'></img></Link>
            <Link id = 'home-link' to = '/'>00 HOME</Link>
            <Link id = 'destination-link' to='/destination'> 01 DESTINATION </Link>
            <button id = 'crew-link'>02 CREW</button>
            <button id = 'tech-link'>03 TECHNOLOGY</button>
        </div>
    )
}

export default Header;