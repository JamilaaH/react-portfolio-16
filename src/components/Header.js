import React, { Fragment } from 'react';
import Banniere from './Banniere';
import Navigation from './Navigation';
import { Form, Button } from 'react-bootstrap';


function Header(props) {


    return (
        <Fragment>
                <header>
                <Navigation page = {props.page} />
                {props.page ==="home" &&
                <Banniere/>                
                }
                { props.page !== "home" &&
                
                    <div className="banniere" id ="home">
                        <div className="contact">
                            <div className="container">
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <h3 className="text-center text-white">Contactez moi </h3>
                                        <Form>
                                            <Form.Group controlId="formGroup">
                                                <Form.Label className="titre-contact">Nom</Form.Label>
                                                <Form.Control type="name" placeholder="votre nom" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroup">
                                                <Form.Label className="titre-contact">Email</Form.Label>
                                                <Form.Control type="Email" placeholder="votre email" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="titre-contact">Votre message</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                            </Form.Group>
                                        </Form>
                                        <Button variant = "outline-light">Envoyer</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </header>
        </Fragment>
    );
}

export default Header;