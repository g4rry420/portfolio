import React from 'react';
import Navbar from './components/Navbar';
import Naming from './components/naming/Naming';
import MyAlmaMeter from './components/MyAlmaMeter';
import Skills from './components/Skills';
import Projects from "./components/projects/Projects";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <span className="background">
        <Naming/>
      </span>
        <MyAlmaMeter/>
        <Skills/>
        <Projects/>
        <Contact/> 
        
    </div>
  );
}

export default App;
