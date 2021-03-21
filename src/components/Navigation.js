import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { HashLink as Link } from 'react-router-hash-link';


function Navigation(props) {
    const [navbar, setNavbar] = useState(false)
    let pageAccueil = props.page ==="home"
    var navig;

    if (pageAccueil){
        navig = (
            <Fragment>
            <a href= "#" onClick={scrollToTop} className="text-decoration-none text-light"> Home </a>
            <a href= "#about" className="text-decoration-none text-light"> A propos </a>
            <a href= "#skills" className="text-decoration-none text-light"> Compétences </a>
            <a href= "#galerie" className="text-decoration-none text-light"> Réalisations </a>
            <NavLink to ="/contact" exact className="text-decoration-none bg-light text-dark p-2" activeClassName="nav-active">Contact</NavLink>
            </Fragment>
        )
    } else {
        navig = (
            <Fragment>
                <NavLink to ="/" exact className="text-decoration-none text-light" activeClassName="nav-active">Home</NavLink>
                <Link to="/#about"  className="text-decoration-none text-light " activeClassName="nav-active">A propos</Link>
                <Link to="/#skills" exact className="text-decoration-none text-light " activeClassName="nav-active">Compétences</Link>
                <Link to="/#galerie" exact className="text-decoration-none text-light " activeClassName="nav-active">Réalisations</Link>
                <Link to ="/contact" exact className="text-decoration-none bg-light text-dark p-2" activeClassName="nav-active">Contact</Link>
            </Fragment>
            )

    }
    
    let changeBackground = () => {
        if (window.scrollY >= 70 ) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <Fragment>
            <nav className={navbar ? "navbar-active" : 'nav'} >
                <div className="logo" >
                    <img src="/img/logo.png"  alt="logo" className="ml-5" onClick={scrollToTop}/>
                </div>
                <div className="navig">
                    {navig}
                </div>  
            </nav>
        </Fragment>
    );


}

export default Navigation;