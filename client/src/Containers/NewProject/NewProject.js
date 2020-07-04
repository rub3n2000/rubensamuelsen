import React, { useState, useEffect } from "react";

import classes from "./NewProject.module.scss";
import './SelectStyling.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import myApi from "../../myApi";

const NewProject = (props) => {

  const[newProject, setNewProject] = useState({
    project: {
      name: "",
      websiteURL: "",
      sourceURL: "",
      subHeader: "",
      description: "",
      screenshotURL: ""
    },
    tags: []
  });

  let filterdivContent;

  let options = [];

  const onFilterChange = (e) => {
    if(e !== null && e !== undefined) {
    let tagArray = [];
    for(let i = 0; i < e.length; i++) {
      tagArray.push(e[i].value);
    }
    let tempProject = newProject;
    tempProject.tags = tagArray;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
    }
    else {
      let tempProject = newProject;
      tempProject.tags = [];
      setNewProject(tempProject);
      props.projectChangeHandler(tempProject);
    }
  }

  const onNameChange = (e) => {
    let tempProject = newProject;
    tempProject.project.name = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  const onWebsiteURLChange = (e) => {
    let tempProject = newProject;
    tempProject.project.websiteURL = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  const onSourceURLChange = (e) => {
    let tempProject = newProject;
    tempProject.project.sourceURL = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  const onSubheaderChange = (e) => {
    let tempProject = newProject;
    tempProject.project.subHeader = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  const onDescriptionChange = (e) => {
    let tempProject = newProject;
    tempProject.project.description = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  const onScreenshotURLChange = (e) => {
    let tempProject = newProject;
    tempProject.project.screenshotURL = e.target.value;
    setNewProject(tempProject);
    props.projectChangeHandler(tempProject);
  }

  if(props.allTags) {
    if(props.allTags.length != 0) {
      for(let i = 0; i < props.allTags.length; i++) {
      options.push({value: props.allTags[i].name, label: props.allTags[i].name});
      }
    }
   }

  filterdivContent = (
    <div className="FilterDivContent">
      <Select
        placeholder="All tags"
        options={options}
        isMulti
        onChange={onFilterChange}
        classNamePrefix="rs2"
        className="rs2__custom-style"
      />
    </div>
  );
  
  if (props.visible) {
    return (
      <div className={classes.NewProjectDiv}>
        <div className={classes.NewProjectForm}>
          <form onSubmit={props.newProject}>
            <label>
              <FontAwesomeIcon icon={faAt} /> Name
              <input
                onChange={onNameChange}
                required
                placeholder="name"
                type="text"
              ></input>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> WebsiteURL
              <input
                onChange={onWebsiteURLChange}
                required
                placeholder="websiteURL"
                type="text"
              ></input>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> SourceURL
              <input
                onChange={onSourceURLChange}
                required
                placeholder="sourceURL"
                type="text"
              ></input>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> Subheader
              <input
                onChange={onSubheaderChange}
                required
                placeholder="subheader"
                type="text"
              ></input>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> Description
              <textarea
                onChange={onDescriptionChange}
                required
                placeholder="description"
                type="text"
              ></textarea>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> ScreenshotURL
              <input
                onChange={onScreenshotURLChange}
                required
                placeholder="screenshot"
                type="text"
              ></input>
            </label>
            <label>
              <FontAwesomeIcon icon={faAt} /> Tags
              {filterdivContent}
            </label>
            <div className={classes.NewProjectButton}>
              <button>Create New</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  else {
      return(
          <></>
      );
  }
};

export default NewProject;
