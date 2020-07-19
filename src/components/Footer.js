import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                            &copy; Copyright <strong>gmarin93-Travel Agency</strong>. All Rights Reserved
          </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">@gmarin93</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;