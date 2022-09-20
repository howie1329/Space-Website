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
            <Link id = 'crew-link' to='/crew'> 02 CREW </Link>
            <Link id = 'tech-link' to = '/technology'>03 TECHNOLOGY</Link>
        </div>
    )
}

export default Header;