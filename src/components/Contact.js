import React, { Fragment } from 'react';

function Contact(props) {
    return (
        <Fragment>
            <section className="container" id="contact">
                <div className="row">
                    <div className="col-12">
                        <h1 className = "text-center">{props.titre}</h1>
                    </div>
                </div>
                <div className="reseaux">
                    <a href="https://www.linkedin.com/in/jamila-hammani/"  target="_blank"  rel="noreferrer"><i className="icon fab fa-linkedin "></i></a>
                    <a href="https://github.com/JamilaaH"  target="_blank" rel="noreferrer"><i className="icon fab fa-github "></i></a>
                    <a href="https://www.instagram.com/jamila.hmn/"  target="_blank" rel="noreferrer"><i className="icon fab fa-instagram"></i></a>
                    <a href="mailto:jamila-h@outlook.fr"  target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                </div>
            </section>
        </Fragment>
    );
}

export default Contact  