import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse'
import { Link, animateScroll as scroll } from "react-scroll";



function Banniere() {
    return (
        <Fragment>
            <div className="banniere">
                    <Fade left>
                        <div className="contenu text-center">
                            <p className="titre">Jamila Hammani</p>
                            <p className="soustitre">Développeuse Full Stack Web | Graphiste </p>
                        </div>                            
                    </Fade>
                    <div class="scroll-indicator">
                        <Pulse count={100}>
                        <Link
                            activeClass="active"
                            to="about"
                            smooth={true}
                            offset={-50}
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

        </Fragment>
    );
}

export default Banniere;