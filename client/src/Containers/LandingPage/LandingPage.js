import React from "react";
import styles from "./LandingPage.module.scss";
import FollowMe from "../FollowMe/FollowMe";

const LandingPage = () => {
  return (
    <section className={styles.LandingPage} id="LandingPage">
      <FollowMe />
      <div className={styles.LandingPageContent}>
        <p>
          Hello I'm <span>Ruben Samuelsen</span>.
          <br />
          I'm a full-stack web developer
        </p>
        <div className={styles.ViewMyWork}>
          <a href="#About">View my work</a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
