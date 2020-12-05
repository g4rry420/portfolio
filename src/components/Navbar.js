import React, { useState, useEffect }  from 'react'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

export default function Navbar() {
    const [classes, changeClass] = useState({classOne: "nav-flex"} )
    const addClass = (e) => {
        if(classes.classOne === "nav-flex"){
            changeClass({classOne: "display-nav"})
        }else{
            changeClass({classOne: "nav-flex"})
        }
    }

    const  [shouldShowActions, setshouldShowActions] = useState(true);
    const [lastYPos, setLastYPos] = useState(90); 
    
    useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            setshouldShowActions(isScrollingUp);
            setLastYPos(yPos)

        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false)
        }

    }, [lastYPos])

    return (
        <motion.nav 
            className="navbar show-on-scroll" 
            animate={ { opacity: shouldShowActions ? 1 : 0 } } 
            
            >
            <Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration= {300}>
                <img className="logo" src={require("../images/logo1.png")} alt="logo"/>
            </Link>
            
            <div>
                <svg onClick={addClass} className="bi bi-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <ul className="nav-flex" id={classes.classOne}>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration= {500}
                        > About</Link>
                    </li>
                    <li>
                        <a href="https://dev.to/g4rry420" rel="noopener noreferrer" target="_blank">Blogs</a>
                    </li>
                    <li>
                        
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Skills</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Projects</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Contact</Link>
                    </li>
                    
                </ul> 
            </div>
        </motion.nav>
    )
}
