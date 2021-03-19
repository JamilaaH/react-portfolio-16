import React, { Fragment, useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'

function About() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section id="about" className="about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">A propos</h1>
                        </div>
                    </div>
                    <div className="row  p-4">
                        <div className="  col-md-6" data-aos="fade-up">
                        <span>
                            Hello world,<br/> je me présente, je m'appelle Jamila Hammani, j'ai 26 ans et je suis full Stack Developpeur et UI Designer.
                            Diplomée en écriture multimédia et formée à MolenGeek en web developper 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident accusantium cum ut corporis saepe minima animi quis! Consequatur beatae quod dolores nulla, asperiores itaque repudiandae a voluptate, laborum, quasi odit incidunt aliquid enim cum velit fuga unde facere ipsa! Quas, beatae?
                        </span>
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