import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';


function Navigation() {
    return (
        <Fragment>
            <nav>
                <div className="logo" >
                    <img src="/img/logo.png"  alt="logo" className="ml-5" onClick={scrollToTop}/>
                </div>
                <div className="navig">
                    <NavLink to ="/" exact className="text-decoration-none text-light" activeClassName="nav-active">Home</NavLink>
                    <Link activeClass="active" to="about" smooth={true} offset={-80}
                    duration={1000} className="text-decoration-none text-light">
                        A propos
                    </Link>
                    <Link activeClass="active" to="skills" smooth={true} offset={-80}
                    duration={1000} className="text-decoration-none text-light">
                        Compétences
                    </Link>
                    <Link activeClass="active" to="galerie" smooth={true} offset={-80}
                    duration={1000} className="text-decoration-none text-light">
                        Galerie
                    </Link>
                    {/* <NavLink to ="/competences" exact className="text-decoration-none text-light" activeClassName="nav-active">compétences</NavLink>
                    <NavLink to ="/galerie" exact className="text-decoration-none text-light" activeClassName="nav-active">réalisations</NavLink> */}
                    <NavLink to ="/contact" exact className="text-decoration-none text-light rounded bg-light text-dark p-2" activeClassName="nav-active">Contact</NavLink>
                </div>  
            </nav>
        </Fragment>
    );
}

export default Navigation;