import React from 'react'
import Social from './Social';

export default function Naming() {
    return (
        
        <div className="center-naming" id="about">
            <div>
                <img src={require("../../images/cover6.png")} alt="gurkiran singh" className="myImage" />
            </div>
            <div>
                <img src={require("../../images/Subtraction 2.png")} alt="subtraction" className="subtraction"/>
                <h1 className="display-2">I am Gurkiran Singh</h1>
                <h2 className="display-4">- Developer By Passion</h2>
                <hr/>
                <div className="social">
                    <Social/>
                </div>
                <img src={require("../../images/grid.png")} alt="grid" className="grid-image"/>
            </div>
           
        </div>
    )
}
