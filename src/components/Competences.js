import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'

function Competence(props) {
    let [skills, setSkills] = useState([
        {nom: "HTML", img:'./img/skills/html.png'},
        {nom: "CSS", img:'./img/skills/css.png'},
        {nom: "Javascript", img:'./img/skills/javascript.png'},
        {nom: "json-file", img:'./img/skills/json-file.png'},
        {nom: "illustrator", img:'./img/skills/illustrator.png'},
        {nom: "indesign", img:'./img/skills/indesign.png'},
        {nom: "photoshop", img:'./img/skills/photoshop.png'},
        {nom: "premiere", img:'./img/skills/premiere.png'},

    ])

    useEffect(()=> {
        Aos.init({duration: 2000});
    }, [])
    return (
        <Fragment>
            <section className="competence" id="skills">
            <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">{props.titre} </h1>
                        </div>
                    </div>
                    <div className="row  p-4">
                        {skills.map((el,i)=>{
                            return (
                            <div className="col-md-3 mt-5 text-center" data-aos="fade-up">
                            <h6 key={i} className="">{el.nom} </h6>
                            <img src={el.img} alt="skill" className="w-50 mx-auto img-skills"/>
                            </div>

                            )
                        })}


                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default Competence;