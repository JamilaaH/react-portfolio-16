import React, { Fragment, useEffect } from 'react';
import Navigation from './Navigation';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse'
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {


    return (
        <Fragment>
            <header>
                <Navigation/>
                    <div className="banniere">
                        <div className="box">
                            <Fade left>
                                <div className="contenu text-center">
                                    <p className="titre">Jamila Hammani</p>
                                    <p className="soustitre">Web developer et graphiste</p>
                                </div>                            
                            </Fade>
                            <div class="scroll-indicator">
                                <Pulse count={100}>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    smooth={true}
                                    offset={-80}
                                    duration={1000} className="text-decoration-none text-light"
                                >
                                <span class="scroll-indicator__text">
                                    <span>Scroll</span>
                                </span>
                                </Link>
                                </Pulse>
                                <span class="scroll-indicator__bar" ></span>
                            </div>
                        </div>
                    </div>
            </header>
        </Fragment>
    );
}

export default Header;