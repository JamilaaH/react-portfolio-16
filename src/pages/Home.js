import React, { Fragment } from 'react';
import About from '../components/About';
import Competence from '../components/Competences';
import Galerie from '../components/Galerie';
import Header from '../components/Header';

function Home() {
    return (
        <Fragment>
            <Header/>
            <About titre="A propos"/>
            <Competence titre ="Compétences"/>
            <Galerie titre ="Mes réalisations"/>
        </Fragment>
    );
}

export default Home;