import React from 'react';
import Home from './components/Home';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Destinationpage from './components/Destinationpage';
import Header from './components/Header';
import Card from './components/Card'
import moon_image from './components/image-moon.png'

function App(){
    return(
       <div className = 'display-container'>
            <div className = 'app-header-container'>
                <Header />
            </div>
            <div className="app-route-container">
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path='/destination' element = {<Destinationpage />} />
                    <Route path='/destination/card' element = {<Card name = 'Moon' body_text = 'Moon text blah blah blah' image = {moon_image} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;