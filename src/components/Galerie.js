import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Card } from 'react-bootstrap';


function Galerie(props) {
    let [illu, setIllu] = useState([
        {nom: 'Emporium', img:'./img/realisations/emporium.png', description: "HTML/CSS/Responsive"},
        {nom: 'Site du chef', img:'./img/realisations/sitechef.png', description: "HTML/CSS/Responsive"},
        {nom: 'Epilogue', img:'./img/realisations/epilogue_screen.png', description: "HTML/CSS/Responsive"},
        {nom: 'Spatial', img:'./img/realisations/spatial.png', description: "HTML/CSS/Responsive"},
    ])

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
                                <div className="col-md-6 mt-3" data-aos="fade-left">
                                <Card key= {i}>
                                <div className="cadre">
                                    <Card.Img variant="top" src={el.img} className="illu" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{el.nom}</Card.Title>
                                    <Card.Text>
                                    {el.description}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
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