import React, { useState, useEffect } from "react";
import styles from "./DetailedProject.module.scss";

const DetailedProject = (props) => {

  const tags = props.project.tags.map((tag) => {
    return <div className={styles.Tag}>{tag.name}</div>;
  });

  return (
    <div
      className={styles.Project}
    >
    </div>
  );
};

export default DetailedProject;
