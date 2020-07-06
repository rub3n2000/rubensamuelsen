import React from "react";
import styles from "./DetailedProject.module.scss";
import ButtonLink from "../../../Components/UI/ButtonLink/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const DetailedProject = (props) => {
  const tags = props.project.tags.map((tag) => {
    return <div className={styles.Tag}>{tag.name}</div>;
  });

  return (
    <div className={styles.DetailedProject}>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <h1 id={styles.Title}>{props.project.name}</h1>
          <h4>{props.project.subHeader}</h4>
        </div>
        <div className={styles.ButtonSection}>
          <ButtonLink link={props.project.websiteURL}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Visit the website
          </ButtonLink>
          <ButtonLink link={props.project.sourceURL}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Visit the source
          </ButtonLink>
        </div>
        <div className={styles.Image}>
          <img
            src={props.project.screenshotURL}
            srcSet="https://i.ibb.co/LJzFYpQ/Untitled.png"
            alt={props.project.name}
          ></img>
        </div>
        <div className={styles.About}>
          <div>
          <h2 className={styles.AboutLabel}>About</h2>
          <hr></hr>
          </div>
          <div className={styles.Description} dangerouslySetInnerHTML={{__html: props.project.description}}></div>
        </div>
        <div className={styles.TagContainer}>{tags}</div>
      </div>
    </div>
  );
};

export default DetailedProject;
