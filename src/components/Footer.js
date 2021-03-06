import React, { Fragment } from 'react';

function Footer(props) {
    return (
        <Fragment>
            <footer id="contact">
                <div className="container">
                    <div className="row">
                            <div className="col-12">
                                <h1 className = "titre-footer text-center">{props.titre}</h1>
                            </div>
                        </div>
                </div>
                <div className="reseaux">
                    <a href="https://www.linkedin.com/in/jamila-hammani/"  target="_blank"><i className="icon fab fa-linkedin "></i></a>
                    <a href="https://github.com/JamilaaH"  target="_blank"><i className="icon fab fa-github "></i></a>
                    <a href="https://www.instagram.com/jamila.hmn/"  target="_blank"><i className="icon fab fa-instagram"></i></a>
                    <a href="mailto:jamila-h@outlook.fr"  target="_blank"><i className="fas fa-envelope"></i></a>
                </div>
                <hr/>
                <div className="text-center">
                    <span className = "copy font-weight-light">
                        &copy; All rights reserved Jamila Hammani <br />2021</span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;