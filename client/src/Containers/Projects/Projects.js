import React, { useState, useEffect } from "react";
import "./Projects.scss";
import axios from "axios";

import Project from "./Project/Project";
import DetailedProject from "./DetailedProject/DetailedProject";
import Filter from "../Projects/Filter/Filter";

import Nav from "../Nav/Nav";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";

const Projects = (props) => {
  const [detailedView, setDetailedView] = useState(false);
  const [projects, setProjects] = useState(null);
  const [projectForDetailedView, setProjectForDetailedView] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const HideDetailedViewHandler = () => {
    setDetailedView(false);
  };

  const OpenDetailedView = (project) => {
    setProjectForDetailedView(project);
    setDetailedView(true);
  };

  const onFilterChange = (e) => {
    if (e == null) {
      setSelectedTags([]);
    } else {
      let tagArray = [];
      for (let i = 0; i < e.length; i++) {
        tagArray.push(e[i].value);
      }
      setSelectedTags(tagArray);
    }
  };

  const FetchProjects = async () => {
    let updatedProjects;
    let response = await axios.get("/api/project");
    if (response.status == 200) {
      updatedProjects = response.data;
    } else {
      updatedProjects = null;
    }
    return updatedProjects;
  };

  const ArrayContainsAllElementsOfTarget = (arr, target) => target.every(v => arr.includes(v));

  useEffect(() => {
    const SetProjects = async () => {
      var tempProjects = await FetchProjects();
      setProjects(tempProjects);
    };
    SetProjects();
  }, []);

  let detailedViewJSX = <></>;

  let projectJsxElements = <></>;
  if (projects !== null && Array.isArray(projects)) {
    projectJsxElements = projects.map((project) => {
        let projectTags = [];
        for(let i = 0; i < project.tags.length; i ++) {
            projectTags.push(project.tags[i].name);
        }
      if (ArrayContainsAllElementsOfTarget(projectTags, selectedTags)) {
        return (
          <Project
            project={project}
            click={() => OpenDetailedView(project)}
            key={project._id}
            isAdmin={props.isAdmin}
            deleteProject={props.deleteProject}
          />
        );
      } else {
         return <></>;
      }
    });
  }

  if (detailedView && projectForDetailedView !== null) {
    detailedViewJSX = <DetailedProject project={projectForDetailedView} />;
  }

  return (
    <>
      <section id="Projects">
        <div className="ProjectsContentContainer">
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <Filter
              onFilterChange={onFilterChange}
              selectedTags={selectedTags}
              projects={projects}
            />
          </div>
          <div className="ProjectListing">
            <Backdrop show={detailedView} clicked={HideDetailedViewHandler} />
            {detailedViewJSX}
            {projectJsxElements}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
