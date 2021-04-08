import React, { Fragment, useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos'

function Competence(props) {
    let [skills, setSkills] = useState([
        {nom: "HTML", img:'./img/skills/html5.svg'},
        {nom: "CSS", img:'./img/skills/css3.svg'},
        {nom: "sass", img:'./img/skills/sass.svg'},
        {nom: "sass", img:'./img/skills/github-icon.svg'},
        {nom: "Javascript", img:'./img/skills/javascript.svg'},
        {nom: "json-file", img:'./img/skills/react.svg'},
        {nom: "illustrator", img:'./img/skills/illustrator.svg'},
        {nom: "indesign", img:'./img/skills/indesign-cc.svg'},
        {nom: "photoshop", img:'./img/skills/photoshop.svg'},
        {nom: "premiere", img:'./img/skills/premiere-cc.svg'},
        {nom: "premiere", img:'./img/skills/adobe-xd.svg'},

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
                            <div className="col-md-2 mt-5 text-center" data-aos="fade-up">
                           {/* / <h6 key={i} className="">{el.nom} </h6> */}
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