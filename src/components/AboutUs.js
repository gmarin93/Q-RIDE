import React, { Fragment } from 'react';

const AboutUs = props => {
    return (
        <Fragment>
            <section id="about">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">About Us</h3>
                            <div className="section-title-divider"></div>
                            <p className="section-description"></p>
                        </div>
                    </div>
                </div>
                <div className="container about-container wow fadeInUp">
                    <div className="row">

                        <div className="col-lg-6 about-img">
                            <img src="img/about-img.jpg" alt="" />
                        </div>

                        <div className="col-md-6 about-content">
                            <h2 className="about-title">We provide great,safely and unforgetable travels</h2>
                            <p className="about-text">
                                We are a company specialized in providing unique travel experiences and tourist activities for our
                                customers inside and outside Costa Rica with the quality and confidence that characterizes us with
                                highly trained personnel to help you to select the best option for your budget, presenting
                                innovative services to satisfaction of the customers.   
          </p>
                            <h2 className="about-title">Our Mission</h2>
                            <p className="about-text">
                                Offer the best personalized travel experience with quality and reliability, through the good attention of our trained personnel, designing unique trips, at affordable prices, managing to exceed the expectations of our clients..
                                
          </p>
                        </div>
                        <div className="col-md-12 about-content">
                        <h2 className="about-title"></h2>
                            <h2 className="about-title">Our Vision</h2>
                            <p className="about-text">
                                Become the most Pura vida Travel Agency in our region, due to the trust and security we offer our clients, presenting innovative services and ensuring a stable tourist activity, promoting an environment of good relations and obtaining the greatest satisfaction from our clients.
          </p>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};


export default AboutUs;