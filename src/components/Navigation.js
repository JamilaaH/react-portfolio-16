import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { HashLink as Link } from 'react-router-hash-link';


function Navigation(props) {
    const [navbar, setNavbar] = useState(false)
    let pageAccueil = props.page ==="home"
    var navig;
    
    //menu responsive 
    let [click, setClick] = useState(false)
    // let [button, setButton] = useState(true)
    
    
    let handleClick = () => setClick(!click)
    let closeMobileMenu = () => setClick(false)
    
    // const showButton = () => {
    //     if (window.innerWidth <= 960 ) {
    //         setButton(false)
    //         console.log('test');
    //     } else {
    //         setButton(true)
    //     }
    // };
    
    // window.addEventListener('resize', showButton)

    if (pageAccueil){
        navig = (
            <Fragment>
            <a href= "#" onClick={scrollToTop, closeMobileMenu} className="text-decoration-none navlink text-light"> Home </a>
            <a href= "#about" onClick={closeMobileMenu} className="text-decoration-none navlink text-light"> A propos </a>
            <a href= "#skills" onClick={closeMobileMenu} className="text-decoration-none navlink text-light"> Compétences </a>
            <a href= "#galerie" onClick={closeMobileMenu} className="text-decoration-none navlink text-light"> Réalisations </a>
            <NavLink to ="/contact" onClick={closeMobileMenu} exact className="text-decoration-none navlink bg-light text-dark rounded p-2" activeClassName="nav-active">Contact</NavLink>
            </Fragment>
        )
    } else {
        navig = (
            <Fragment>
                <NavLink to ="/" exact className="text-decoration-none navlink text-light" activeClassName="nav-active">Home</NavLink>
                <Link to="/#about" onClick={closeMobileMenu}  className="text-decoration-none navlink text-light " activeClassName="nav-active">A propos</Link>
                <Link to="/#skills" onClick={closeMobileMenu} exact className="text-decoration-none navlink text-light " activeClassName="nav-active">Compétences</Link>
                <Link to="/#galerie" onClick={closeMobileMenu} exact className="text-decoration-none navlink text-light " activeClassName="nav-active">Réalisations</Link>
                <Link to ="/contact" onclick={closeMobileMenu} exact className="text-decoration-none navlink bg-light text-dark rounded p-2" activeClassName="nav-active">Contact</Link>
            </Fragment>
            )

    }
    //mettre la couleur au navbar au moment du scroll
    let changeBackground = () => {
        if (window.scrollY >= 50 ) {
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
                <div className="menu" onClick={handleClick}>
                    <i className= {click ? 'fas fa-times icon' : 'fas fa-bars icon'}></i>
                </div>
                <div className= {click? 'mobile' : 'navig'}>
                    {navig}
                </div>  
            </nav>
        </Fragment>
    );


}

export default Navigation;