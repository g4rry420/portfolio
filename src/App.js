import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Naming from './components/naming/Naming';
import MyAlmaMeter from './components/MyAlmaMeter';
import Skills from './components/Skills';
import Projects from "./components/projects/Projects";
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    let scroll = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 1000 / 60));
    let elementsToShow = document.querySelectorAll(".show-on-scroll");
    console.log(elementsToShow)

    const loop = () => {
      elementsToShow.forEach((element) => {
          if(isElementInViewport(element)) {
            element.classList.add("is-visible");
          }else{
            element.classList.remove("is-visible");
          }
      })
      scroll(loop);
    }
  
    loop();

  })

  const isElementInViewport = (el) => {

    let rect = el.getBoundingClientRect();
    return(
      (rect.top <= 0 && rect.bottom >= 0) 
              || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
              && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 
              || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );

  }


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
