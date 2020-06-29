import React, { useState, useEffect } from 'react';
import './Projects.scss';
import axios from 'axios';

import Project from './Project/Project';
import DetailedProject from './DetailedProject/DetailedProject';

import Nav from '../Nav/Nav';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';

const Projects = ( props ) => {

    const[detailedView, setDetailedView] = useState(false);
    const[projects, setProjects] = useState(null);
    const[projectForDetailedView, setProjectForDetailedView] = useState(null);

    const HideDetailedViewHandler = () => {
        setDetailedView(false);
    }

    const OpenDetailedView = (project) => {
        console.log(project);
        setProjectForDetailedView(project);
        setDetailedView(true);
    }

    const FetchProjects = async() => {
        let updatedProjects;
        let response = await axios.get("/api/project");
        if(response.status == 200) {
            updatedProjects = response.data;
        } else {
            updatedProjects = null;
        }
        return updatedProjects;
    }

    useEffect(() => {
        const SetProjects = async() => {
            var tempProjects = await FetchProjects();
            console.log(tempProjects);
            setProjects(tempProjects);
        }
        SetProjects();
    }, [])

    let detailedViewJSX = <></>;

    let projectJsxElements = <></>;
    if(projects !== null && Array.isArray(projects)) {
        projectJsxElements = projects.map((project) => {
            return(
                <Project project={project} click={() => OpenDetailedView(project)} key={project._id}/>
            );
        })
    }

    if(detailedView && projectForDetailedView !== null) {
        console.log("hey");
        detailedViewJSX = <DetailedProject project={projectForDetailedView}/>
    }

    return(
        <>
        <section id="Projects">
            <div className="ProjectsContentContainer">
                <div>
                    <h1>
                        Projects
                    </h1>
                </div>
                <div className="ProjectListing">
                    <Backdrop show={detailedView} clicked={HideDetailedViewHandler}/>
                    {detailedViewJSX}
                    {projectJsxElements}
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects;