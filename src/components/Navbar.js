import React, { Fragment } from 'react';


const Navbar = props => {
    return (
        <Fragment>
            <header id="header">
                <div className="container">

                    <div id="logo" className="pull-left" style={{'margin':'-21px'}}>
                        <a href="https://www.google.com/">
                            <img src="img/logo3.png" className="" alt="" title="" />
                        </a>

                        {/* <h1><a href="#hero">Q' RIDE</a></h1> */}
                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#hero">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Packages</a></li>
                            <li><a href="#portfolio">Hotels</a></li>
                            <li><a href="#team">Special Promotions</a></li>
                            <li><a href="#terms">Terms and Conditions</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </Fragment >
    );
};



export default Navbar;