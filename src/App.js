import React from 'react';
import './App.css';
import './css/icon-font.css';
import Projects from './components/Projects'
import Techlist from './components/Techlist'
import Gears from './components/Gears'
import City from './components/City'
import Footer from './components/Footer'

function App() {
  return (
    <div className="whole">
        <Gears />

        <Techlist />

        <City />

        <Projects />

        <Footer />
    </div>
  );
}

export default App;
