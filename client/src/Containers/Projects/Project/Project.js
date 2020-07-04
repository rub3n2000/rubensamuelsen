import React, { useState } from "react";
import styles from "./Project.module.scss";

const Project = (props) => {
  const [hovered, setHovered] = useState(
    window.innerWidth > 1285 && window.innerHeight > 900 ? false : true
  );

  const tags = props.project.tags.map((tag) => {
    return <div className={styles.Tag}>{tag.name}</div>;
  });

  return (
    <div
      className={styles.Project}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={!props.isAdmin ? props.click : null}
    >
      <div
        className={hovered ? styles.Image + " " + styles.Faded : styles.Image}
      >
        <img
          src={props.project.screenshotURL}
          srcSet="https://i.ibb.co/LJzFYpQ/Untitled.png"
          alt={props.project.name}
        ></img>
      </div>
      <div className={hovered ? styles.MoreInfo : styles.Invisible}>
        <div className={styles.Label}>
          <h2>{props.project.name}</h2>
        </div>
        <div className={styles.TagContainer}>
          {!props.isAdmin ? (
            tags
          ) : (
            <div className={styles.Deletebutton}>
              <button
                onClick={() => {
                  props.deleteProject(props.project._id);
                }}
              >
                Delete Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
