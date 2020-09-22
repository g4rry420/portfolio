import React from 'react'

export default function Projects() {

    return (
        <section className="container-fluid section-three mt-5" id="projects">
            <h2 className="display-3 py-5">Projects</h2>
            <div className="row fade-out-siblings">

                <div className="col-md-4 col-12 mb-5">
                    <div className="card cards">
                        <img className="card-img-top" src={require("../../images/countries.png")} alt="card"/>
                        <div className="card-body">
                            <h5 className="card-title">Rest Countries API</h5>
                            <p className="card-text">This project is implemented by using vanilla javascript in which
                            I used the fetch method to call api and display their content in the layout.</p>
                        </div>
                        <div className="link">
                            <a id="website" href="https://rest-countries-api-with-color-theme-switcher-jet.now.sh/" target="_blank" rel="noopener noreferrer">
                                View Website
                            </a>
                            
                            <a id="sourceCode" href="https://github.com/g4rry420/Rest-Countries-Api-with-color-theme-switcher" target="_blank" rel="noopener noreferrer">
                                View Source Code
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={"col-md-4 col-12 mb-5"}>
                    <div className="card cards">
                        <img className="card-img-top" src="..." alt="card"/>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

                <div className={"col-md-4 col-12 mb-5"}>
                    <div className="card cards">
                        <img className="card-img-top" src="..." alt="card"/>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
