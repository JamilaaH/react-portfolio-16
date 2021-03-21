import React, { Fragment } from 'react';
import About from '../components/About';
import Competence from '../components/Competences';
import Footer from '../components/Footer';
import Galerie from '../components/Galerie';
import Header from '../components/Header';

function Home() {
    let page = 'home'
    return (
        <Fragment>
            <Header page = {page}/>
            <About titre="A propos"  />
            <Competence titre ="Compétences" />
            <Galerie titre ="Mes réalisations" />
            <Footer/>
        </Fragment>
    );
}

export default Home;