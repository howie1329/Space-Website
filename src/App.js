import React from 'react';
import Home from './components/Home';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Destination from './components/Destination';
import Header from './components/Header';
import DestinationCard from './components/DestinationCard'
import moon_image from './components/image-moon.png'
import mars_image from './components/image-mars.png'
import europa_image from './components/image-europa.png'
import titan_image from './components/image-titan.png'
import Data from './components/data.json';
import Crew from './components/Crew'
import Technology from './components/Technology';

function App(){
    // Data for Moon Card
    const moon_data = Data.destinations[0]
    // Data for Mars Card
    const mars_data = Data.destinations[1]
    // Data for Europa Card
    const europa_data = Data.destinations[2]
    // Data for Titan Card
    const titan_data = Data.destinations[3]

    return(
       <div className = 'display-container'>
            <div className = 'app-header-container'>
                <Header />
            </div>
            <div className="app-route-container">
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path = '/destination' element = {<Destination />}>
                        <Route path='/destination/moon' element = {<DestinationCard name = {moon_data.name} body_text = {moon_data.description} image = {moon_image} distance = {moon_data.distance} travel_time = {moon_data.travel}/>} />
                        <Route path = '/destination/mars' element = {<DestinationCard name = {mars_data.name} body_text = {mars_data.description} image = {mars_image} distance = {mars_data.distance} travel_time = {mars_data.travel}/>}/>
                        <Route path = '/destination/europa' element = {<DestinationCard name = {europa_data.name} body_text = {europa_data.description} image = {europa_image} distance = {europa_data.distance} travel_time = {europa_data.travel} />}/>
                        <Route path = '/destination/titan' element = {<DestinationCard name = {titan_data.name} body_text = {titan_data.description} image = {titan_image} distance = {titan_data.distance} travel_time = {titan_data.travel} />}/>
                    </Route>
                    <Route path = '/crew' element = {<Crew />} />
                    <Route path = '/technology' element = {<Technology />} />
                    
                </Routes>
            </div>
        </div>
    )
}

export default App;