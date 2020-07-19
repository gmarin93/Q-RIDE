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
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Discounts</a></li>
                            <li><a href="#testimonials">Hotels</a></li>
                            <li><a href="#team">Destiny</a></li>
                            <li className="menu-has-children"><a href="https://www.google.com/">About us</a>
                                <ul>
                                    <li><a href="https://www.google.com/">Drop Down 1</a></li>
                                    <li className="menu-has-children"><a href="https://www.google.com/">Drop Down 2</a>
                                        <ul>
                                            <li><a href="https://www.google.com/">Deep Drop Down 1</a></li>
                                            <li><a href="https://www.google.com/">Deep Drop Down 2</a></li>
                                            <li><a href="https://www.google.com/">Deep Drop Down 3</a></li>
                                            <li><a href="https://www.google.com/">Deep Drop Down 4</a></li>
                                            <li><a href="https://www.google.com/">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.google.com/">Drop Down 3</a></li>
                                    <li><a href="https://www.google.com/">Drop Down 4</a></li>
                                    <li><a href="https://www.google.com/">Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </Fragment >
    );
};



export default Navbar;