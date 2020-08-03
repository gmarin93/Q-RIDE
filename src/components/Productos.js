import React, { Fragment } from 'react';


const Productos = ({title}) => {
    return (
        <Fragment>
            <section id="team">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">{title}</h3>
                            <div className="section-title-divider"></div>
                            <p className="section-description"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="member">
                                <div className="pic"><img src="img/love.jpg" alt=""></img></div>
                                <h4>San Valentine's day, valid for all month</h4>
                                <span>25% Discount in travels on February</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="pic"><img src="img/tulemar-bungalows-villas.jpg" alt=""></img></div>
                                <h4>An half year vacation, valid since June until August</h4>
                                <span>1 Extra free night on affiliated hotels</span>
                               
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="pic"><img src="img/SantaTanker.jpg" alt=""></img></div>
                                <h4>Christmas Eve</h4>
                                <span>15% Discount on affiliated airlines</span>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="pic"><img src="img/Costa-Rica.jpg" alt=""></img></div>
                                <h4>National Travellers</h4>
                                <span>10% Discount on national tours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};


export default Productos;