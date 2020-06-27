import React, { useState, useEffect } from "react";
import styles from "./DetailedProject.module.scss";

const DetailedProject = (props) => {
  const [hovered, setHovered] = useState(false);

  const tags = props.project.tags.map((tag) => {
    return <div className={styles.Tag}>{tag.name}</div>;
  });

  return (
    <div
      className={styles.Project}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={props.click}
    >
      <div className={hovered?styles.Image + " " + styles.Faded:styles.Image}>
        <img src={props.project.screenshotURL} alt={props.project.name}></img>
      </div>
      <div className={hovered ? styles.MoreInfo : styles.Invisible}>
        <div className={styles.Label}>
          <h2>{props.project.name}</h2>
        </div>
        <div className={styles.TagContainer}>{tags}</div>
      </div>
    </div>
  );
};

export default DetailedProject;
