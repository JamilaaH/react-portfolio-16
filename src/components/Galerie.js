import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Card , Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Galerie(props) {
    let [illu, setIllu] = useState([
        {nom: 'Emporium', img:'./img/realisations/emporium.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Site du chef', img:'./img/realisations/sitechef.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Epilogue', img:'./img/realisations/epilogue_screen.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Spatial', img:'./img/realisations/spatial.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Affiche', img:'./img/realisations/affiche-tyn.png', description: "Affiche réalisée pour une association", categorie: " "},
        {nom: 'Visuel pour les réseaux', img:'./img/realisations/content-reseaux.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Flyer - TYN', img:'./img/realisations/flyertyn.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Logo', img:'./img/realisations/logo-site.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Visuel pour les réseaux', img:'./img/realisations/content-reseaux2.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Logo', img:'./img/realisations/logo-tyn.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Maquette de site', img:'./img/realisations/maquette-site.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Carte de visite', img:'./img/realisations/mk-metal.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Logo', img:'./img/realisations/mk.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'Maquette d application', img:'./img/realisations/read-meet.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'template photobooth', img:'./img/realisations/template.png', description: "HTML/CSS/Responsive", categorie: " "},
        {nom: 'TFE - Application', img:'./img/realisations/tfe.png', description: "HTML/CSS/Responsive", categorie: " "},
    ])

    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <div className="col-md-4 mt-3" data-aos="fade-left" data-aos-delay="100">
                                <Card key= {i}>
                                    <div className="cadre" variant="primary" onClick={handleShow}>
                                        <Card.Img variant="top" src={el.img} className="illu" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{el.nom}</Card.Title>
                                        <Card.Text>
                                            {el.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{el.nom}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* <img src="" alt="" /> */}
                                    <img src={el.img} className="illu w-100" />
                                </Modal.Body>
                                <Modal.Footer>
                                    {/* <Button variant="secondary" onClick={handleClose}>
                                    Close
                                    </Button> */}
                                </Modal.Footer>
                            </Modal>
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