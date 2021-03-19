import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'


function Galerie(props) {
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
                </div>

            </section>
        </Fragment>
    );
}

export default Galerie;