import React from 'react';

const Contact = props => {
    return (
        <section id="contact">
            <div className="container wow fadeInUp">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="section-title">Contact Us</h3>
                        <div className="section-title-divider"></div>
                        <p className="section-description"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-md-push-2">
                        <div className="info">
                            <div>
                                <i className="fa fa-map-marker"></i>
                                <p>La Fortuna, San Carlos<br />500 meters west, Los Vargas Street <br /></p>
                            </div>

                            <div>
                                <i className="fa fa-envelope"></i>
                                <p>info@queride@cr.com</p>
                            </div>

                            <div>
                                <i className="fa fa-phone"></i>
                                <p>+506 2460 8888</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-md-push-2">
                    <div className="form">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" className="contactForm">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;