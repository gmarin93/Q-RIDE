import React, { Fragment } from 'react';


const Services = props => {
    return (
        <Fragment>
            <section id="services">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Our Packages</h3>
                            <div className="section-title-divider"></div>
                            <p className="section-description"></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 service-item">
                            <div className="service-icon"><i className="fa fa-plane"></i></div>
                            <h4 className="service-title"><a href="https://www.google.com/">Barcelona</a></h4>
                            <p className="service-description">
                            Travel to Barcelona, enjoy 7 Nights in the Almanac Barcelona, learn about the art of Picasso In the Picasso museum, private transport included.
                            <strong>Price: 2028$ Travellers:2</strong>
                            </p>
                            
                        </div>
                        <div className="col-md-3 service-item">
                            <div className="service-icon"><i className="fa fa-plane"></i></div>
                            <h4 className="service-title"><a href="https://www.google.com/">Puerto viejo</a></h4>
                            <p className="service-description">Get to the beautiful Puerto viejo, Costa rica for 3 nights in the Le cameleon Hotel, know about the nature of this place with the tour of jaguar rescue center, private transport included.
                            <strong>Price: 694$ Travellers:2</strong>
                            </p>
                        </div>
                        <div className="col-md-3 service-item">
                            <div className="service-icon"><i className="fa fa-plane"></i></div>
                            <h4 className="service-title"><a href="https://www.google.com/">Punta Cana</a></h4>
                            <p className="service-description">Explore the magnificent coasts of Punta Cana, enjoy 5 nights in the Barcelo Bavaro Palace, take an adventure in the top experience tour, private transport included
                            <strong>Price: 694$ Travellers:2</strong></p>
                        </div>
                        <div className="col-md-3 service-item">
                            <div className="service-icon"><i className="fa fa-plane"></i></div>
                            <h4 className="service-title"><a href="https://www.google.com/">La Fortuna</a></h4>
                            <p className="service-description">If you come to Costa Rica you must go to La Fortuna, share your experience for 4 nights to other travelers in the Sellinas hostel, explore la fortuna with a guide tour, private transport included. 
                            <strong> Price: 300$ Travellers:2</strong></p>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};


export default Services;