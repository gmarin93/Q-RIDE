import React, { Fragment } from 'react';

const Destiny = ({ title, images, names, infoNacional, InfoNacionalPrices }) => {
    return (
        <Fragment>
            <section id="portfolio">
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
                            <a className="portfolio-item" style={{ 'background-image': `url(${`../img/${images[0]}`})` }} href="#">
                                <div className="details">
                                    <h4>{names[0]}</h4>
                                    <span>{infoNacional[4]}</span>
                                    <span><strong>{InfoNacionalPrices[0]}</strong></span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3">
                            <a className="portfolio-item" style={{ 'background-image': `url(${`../img/${images[1]}`})` }} href="#">
                                <div className="details">
                                    <h4>{names[1]}</h4>
                                    <span>{infoNacional[3]}</span>
                                    <span><strong>{InfoNacionalPrices[1]}</strong></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a className="portfolio-item" style={{ 'background-image': `url(${`../img/${images[2]}`})` }} href="#">
                                <div className="details">
                                    <h4>{names[2]}</h4>
                                    <span>{infoNacional[0]}</span>
                                    <span><strong>{InfoNacionalPrices[2]}</strong></span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3">
                            <a className="portfolio-item" style={{ 'background-image': `url(${`../img/${images[3]}`})` }} href="#">
                                <div className="details">
                                    <h4>{names[4]}</h4>
                                    <span>{infoNacional[1]}</span>
                                    <span><strong>{InfoNacionalPrices[3]}</strong></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a className="portfolio-item" style={{ 'background-image': `url(${`../img/${images[4]}`})` }} href="#">
                                <div className="details">
                                    <h4>{names[3]}</h4>
                                    <span>{infoNacional[2]}</span>
                                    <span><strong>{InfoNacionalPrices[4]}</strong></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};


export default Destiny;