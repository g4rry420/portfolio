import React,{ useState } from 'react'

export default function Projects() {
    const [content, setContent] = useState([
        { id: 1, imgUrl: `${require("../../images/countries.png")}`, webUrl: "https://rest-countries-api-with-color-theme-switcher-jet.now.sh/", title: "Rest Countries API made using vanilla javascript."},
        { id: 2, imgUrl: `${require("../../images/comfyHouse.PNG")}`, webUrl: "https://comfy-house.g4rry420.vercel.app/", title: "Comfy House - An Ecommerce Website" },
        { id: 3, imgUrl: `${require("../../images/spotidex.PNG")}`, webUrl: "https://spotidex.vercel.app/#", title: "Spotidex - A Music app" },
        { id: 4, imgUrl: `${require("../../images/json.PNG")}`, webUrl: "https://json-validator-and-formatter.vercel.app/", title: "Json Formatter and Validator" },
        { id: 5, imgUrl: `${require("../../images/passwordGenerator.PNG")}`, webUrl: "https://password-generator-dun-sigma.vercel.app/", title: "Password Generator" },
        { id: 6, imgUrl: `${require("../../images/huddle.PNG")}`, webUrl: "https://huddle-landing-page-roan-ten.now.sh/", title: "Huddle - A Landing Page" },
        { id: 7, imgUrl: `${require("../../images/socialMedia.PNG")}`, webUrl: "https://social-media-dashboard-switcher.now.sh/#", title: "A Social Media Dashboard Page"}
    ])


    return (
        <section className="container-fluid section-three mt-5 show-on-scroll" id="projects">
            <h2 className="display-3 py-5">Projects</h2>
            <div className="container">
                <div className="row fade-out-siblings">
                {/*
                    content.map(item => (
                        <div className="col-md-4 col-12 mb-5" key={item.id}>
                            <div className="card cards">
                                <img className="card-img-top" src={item.imgUrl} alt="card"/>
                                <div className="overlay">
                                    <div className="text-center">
                                        <h5> {item.title} </h5>
                                    </div> 
                                    <div className="link">
                                        <a id="website" href={item.webUrl} target="_blank" rel="noopener noreferrer">
                                            <button className="btn">
                                                View Website
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    */}
                {
                    content.map(item => (
                        <div  className="col-md-4 flex-item  col-12 mb-5" key={item.id}>
                            <div className="card">
                                <img src={item.imgUrl} alt="card" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"></p>
                                    <a href={item.webUrl} target="_blank" rel="noopener noreferrer" className="btn btn-website">View Website</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}
