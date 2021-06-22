import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Card  } from 'react-bootstrap';

function Galerie(props) {
    let [illu, setIllu] = useState([
        {id:1 , nom: 'Emporium', img:'./img/realisations/emporium.png', description: "HTML/CSS/Responsive", categorie: " "},
        {id:2 , nom: 'Site du chef', img:'./img/realisations/sitechef.png', description: "HTML/CSS/Responsive", categorie: " "},
        {id:3 , nom: 'Epilogue', img:'./img/realisations/epilogue_screen.png', description: "HTML/CSS/Responsive", categorie: " "},
        {id:4 , nom: 'Spatial', img:'./img/realisations/spatial.png', description: "HTML/CSS/Responsive", categorie: " "},
        {id:5, nom: 'Affiche', img:'./img/realisations/affiche-tyn.png', description: "Affiche réalisée pour une association", categorie: " "},
        {id:6 , nom: 'Visuel pour les réseaux', img:'./img/realisations/content-reseaux.png', description: "Contenu réalisé durant un stage", categorie: " "},
        {id: 7, nom: 'Flyer - TYN', img:'./img/realisations/flyertyn.png', description: "Flyer distribué durant un événement", categorie: " "},
        {id: 8, nom: 'Logo', img:'./img/realisations/logo-site.png', description: "Logo pour un site de projet d'année", categorie: " "},
        {id:9 , nom: 'Visuel pour les réseaux', img:'./img/realisations/content-reseaux2.png', description: "contenu réalisé durant un stage", categorie: " "},
        {id:10 , nom: 'Logo', img:'./img/realisations/logo-tyn.png', description: "Logo réalisé pour une formation", categorie: " "},
        {id:11 , nom: 'Maquette de site', img:'./img/realisations/maquette-site.png', description: "Maquette de site réalisée pour un projet d'année", categorie: " "},
        {id:12 , nom: 'Carte de visite', img:'./img/realisations/mk-metal.png', description: "Carte de visite réalisée durant un stage", categorie: " "},
        {id: 13, nom: 'Logo', img:'./img/realisations/mk.png', description: "Logo réalisé durant un stage", categorie: " "},
        {id:14 , nom: 'Maquette d application', img:'./img/realisations/read-meet.png', description: "Maquette d'application réalisée pour un projet d'année ", categorie: " "},
        {id:15 , nom: 'template photobooth', img:'./img/realisations/template.png', description: "Template de photobooth réalisé pour un événement", categorie: " "},
        {id:16 , nom: 'TFE - Application', img:'./img/realisations/tfe.png', description: "Maquette de site et travaux de fin d'études d'une application fictive", categorie: " "},
    ])

    function overlay(e) {
        e.target.style = 'filter:brightness(0.4)'
    }
    function nonoverlay(e) {
        e.target.style = 'filter:unset'
    }

    function visible(e) {
        e.target.style = 'display:flex'
    }
    function invisible(e) {
        e.target.style = 'display:unset'
    }



    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])


    return (
        <Fragment>
            <section id="galerie">
                <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">{props.titre}</h1>
                            </div>    
                        </div>
                        <div className="row">
                            {illu.map((el,i)=>{
                                return (
                                    <div  className="col-md-4 mt-3" data-aos="fade-left" data-aos-delay="100" >
                                        <div className="carte"  onMouseEnter={overlay} onMouseLeave={nonoverlay}>
                                            <div id="image" >
                                                <img src={el.img} alt="illu" className="w-100"/>
                                            </div>
                                            <div className="" > 
                                                <p className="caption" >{el.description}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
            </section>
        </Fragment>
    );
}

export default Galerie;