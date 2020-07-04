import React from "react";
import styles from "../../App.module.scss";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const MainPage = () => {
  return (
    <div className={styles.App}>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
