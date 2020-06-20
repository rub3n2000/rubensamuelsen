import React, { useState, useEffect } from 'react';
import './Projects.scss';
import axios from 'axios';

import Nav from '../Nav/Nav';

const Projects = ( props ) => {
    return(
        <>
        <section id="Projects">
            <div className="NavContainer">
            <Nav SetPath={props.SetPath}/>
            </div>
            <div id="ProjectsContentContainer">
                <h1>
                    Projects
                </h1>
            </div>
        </section>
        </>
    )
}

export default Projects;