import React, { Fragment } from 'react';
import { Button} from 'react-bootstrap'

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="row box-footer">
                        <div className="col-md-4">
                            <img src="../img/logo.png" alt="logo" className="w-25 float-right"/>
                        </div>
                        <div className="col-md-4 reseaux">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="col-md-4">
                            <Button variant="outline-light">Contact</Button>
                        </div>
                    </div>
                </div>
                <div className="copy  text-center">
                    <span>
                        &copy; Copyright H.Jamila | Coding School 2021</span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;