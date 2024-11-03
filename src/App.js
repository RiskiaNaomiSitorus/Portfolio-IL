// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Service';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
