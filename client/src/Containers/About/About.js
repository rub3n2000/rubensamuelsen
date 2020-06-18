import React, { useState, useEffect } from 'react';
import './About.scss';
import axios from 'axios';

import Nav from '../Nav/Nav';

const About = ( props ) => {
    return(
        <>
        <section id="About">
        <Nav SetPath={props.SetPath}/>
            <div id="AboutContentContainer">
                <div id="AboutContent">
                    <h1>
                        About
                    </h1>
                    <div id="AboutText">
                        Lurem ipsum Jeg er web developer.
                        Lurem ipsum jeg er web developer.
                        Hva er jeg. Web developer.
                        Jeg bruker React. Og mer.
                        Haha jeg er 20.
                        Lurem ipsum Jeg er web developer.
                        Lurem ipsum jeg er web developer.
                        Hva er jeg. Web developer.
                        Jeg bruker React. Og mer.
                        Haha jeg er 20.
                        Lurem ipsum Jeg er web developer.
                        Lurem ipsum jeg er web developer.
                        Hva er jeg. Web developer.
                        Jeg bruker React. Og mer.
                        Haha jeg er 20.
                        Lurem ipsum Jeg er web developer.
                        Lurem ipsum jeg er web developer.
                        Hva er jeg. Web developer.
                        Jeg bruker React. Og mer.
                        Haha jeg er 20.
                    </div>
                    <h2>My Skills</h2>
                    <div id="SkillSeksjon">
                    <div id="SkillCo1"></div>
                    <div id="SkillCo2"></div>
                    <div id="SkillCo3"></div>
                    <div id="SkillCo4"></div>
                    <div id="SkillCo5"></div>
                    <div id="SkillCo6"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;