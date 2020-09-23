import React from 'react'

export default function Contact() {
    return (
        <section className="container-fluid section-four show-on-scroll" id="contact">
            <h2 className="display-3">Drop a Message!</h2>
            <div className="row form">
                <div className="col-lg-12 pt-3">
                    <form action="https://formspree.io/xyynjdae" method="POST">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 px-5 pt-4 pb-4">
                                <input className="form-control no-border" name="name" required placeholder="Name" id="name" type="text"/>
                            </div>
                            <div className="col-lg-6 col-sm-12 px-5 pt-4 pb-3">
                                <input required name="email" placeholder="Email Address" type="email" className="form-control no-border"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col p-5">
                                <textarea required name="message" placeholder="Your Message" rows="4" className="form-control no-border"></textarea>
                            </div>
                        </div>
                        <center>
                            <button className="btn mt-3 submit" typeof="submit">Submit</button>
                        </center>
                    </form>
                </div>
            </div>
        </section>
    )
}
