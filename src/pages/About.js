import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

function About(props) {
    return (
        <Fragment>
            <div className="container">
            <div className="row">
                <Fade left>
                <div className="col-md-6">
                <h1 className="text-center">React Reveal</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident accusantium cum ut corporis saepe minima animi quis! Consequatur beatae quod dolores nulla, asperiores itaque repudiandae a voluptate, laborum, quasi odit incidunt aliquid enim cum velit fuga unde facere ipsa! Quas, beatae?
                </div>
                </Fade>
                <Fade right>
                <div className="col-md-6">
                <h1 className="text-center">React Reveal</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident accusantium cum ut corporis saepe minima animi quis! Consequatur beatae quod dolores nulla, asperiores itaque repudiandae a voluptate, laborum, quasi odit incidunt aliquid enim cum velit fuga unde facere ipsa! Quas, beatae?
                </div>
                </Fade>
            </div>
            </div>
        </Fragment>
    );
}

export default About;