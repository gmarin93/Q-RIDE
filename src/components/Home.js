import React, { Fragment } from 'react';


const Home = props => {
    return (

        <Fragment>

            <section id="hero">
                <div className="hero-container">
                    <div className="wow fadeIn">
                        <div className="hero-logo">
                            <img className="" src="img/logo3.png" alt="Imperial" />
                        </div>
                        <h1>Welcome to Q' Ride Travel Agency!</h1>
                        <h2>We are your <span className="rotating">Best Option,Best Experience, Best Travel!</span></h2>
                        <div className="actions">
                            <a href="#about" className="btn-get-started">Get Started</a>
                            <a href="#services" className="btn-services">Our Packages</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
};



export default Home;