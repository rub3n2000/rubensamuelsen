//#region Imports
  //#region Module dependencies
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  //#endregion
  //#region Component imports
  import Project from "./Project/Project";
  import DetailedProject from "./DetailedProject/DetailedProject";
  import Filter from "../Projects/Filter/Filter";
  import Backdrop from "../../Components/UI/Backdrop/Backdrop";
  //#endregion
  //#region Style imports
  import styles from "./Projects.module.scss";
  //#endregion
//#endregion

const Projects = (props) => {

  //#region State declerations
  const [detailedView, setDetailedView] = useState(false);
  const [projects, setProjects] = useState(null);
  const [projectForDetailedView, setProjectForDetailedView] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  //#endregion

  //#region Event handlers
  const hideDetailedViewHandler = () => {
    setDetailedView(false);
  };

  const openDetailedView = (project) => {
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
  //#endregion

  //#region Helper methods
  const fetchProjects = async () => {
    let updatedProjects;
    let response = await axios.get("/api/project");
    if (response.status == 200) {
      updatedProjects = response.data;
    } else {
      updatedProjects = null;
    }
    return updatedProjects;
  };

  const arrayContainsAllElementsOfTarget = (arr, target) =>
    target.every((v) => arr.includes(v));
  //#endregion

  useEffect(() => {
    const SetProjects = async () => {
      var tempProjects = await fetchProjects();
      setProjects(tempProjects);
    };
    SetProjects();
  }, []);

  //#region Render logic
  let detailedViewJSX = <></>;

  let projectJsxElements = <></>;
  if (projects !== null && Array.isArray(projects)) {
    projectJsxElements = projects.map((project) => {
      let projectTags = [];
      for (let i = 0; i < project.tags.length; i++) {
        projectTags.push(project.tags[i].name);
      }
      if (arrayContainsAllElementsOfTarget(projectTags, selectedTags)) {
        return (
          <Project
            project={project}
            click={() => openDetailedView(project)}
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
  //#endregion

  //#region  Rendering
  return (
    <>
      <section className={styles.Projects} id="Projects">
        <div className={styles.ProjectsContentContainer}>
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
          <div className={styles.ProjectListing}>
            <Backdrop show={detailedView} clicked={hideDetailedViewHandler} />
            {detailedViewJSX}
            {projectJsxElements}
          </div>
        </div>
      </section>
    </>
  );
  //#endregion
};

export default Projects;
