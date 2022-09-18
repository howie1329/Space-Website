import React from 'react';
import Home from './components/Home';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Destinationpage from './components/Destinationpage';
import Header from './components/Header';

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
                </Routes>
            </div>
        </div>
    )
}

export default App;