import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'

function About(props) {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="about" className="about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">{props.titre}</h1>
                        </div>
                    </div>
                    <div className="row  p-4">
                        <div className="  col-md-6" data-aos="fade-up">
                        <p>Jeune diplomée en écriture multimédia à l’ISFSC. Je souhaite mettre en pratique toutes les compétences
                        acquises.
                        Je suis passionnée de photographie gastronomique et paysage (autodidacte) et par le web design, je suis
                        très à l'aise avec la suite Adobe et approfondi mes compétences en
                        auto-formation, de nature curieuse je m'inspire de tout ce qui m'entoure.</p>      

                        <p>Durant mon parcours académique j'ai eu l'occasion de réaliser mes stages dans 2 domaines différents.
                        Lors de mon stage de 8 semaines chez KERN IT, j'ai eu l'occasion de réaliser des maquettes de site, logo
                        ainsi qu'une maquette d'un prototype d'application. J'ai également réalisé des sites en CMS (Squarespace
                        ou encore Wordpress) ainsi que des analyses au niveau du référencement SEO. </p>
                        
                        <p>Mon second stage de 12 semaines a été fait chez Wazo Agency, ça s'est tourné autour du marketing
                        digitale et des créations de visuels
                        pour les différents réseaux sociaux de l'entreprise et de leurs clients. J'ai pu également mettre en
                        action une de mes passions : la photographie.
                        </p>
                        </div>

                        <div className="col-md-6" data-aos="fade-up" >
                            <img src="../img/illu.png" alt="dev" className="w-100"/>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default About;