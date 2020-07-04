import React, { useState } from "react";
import styles from "./About.module.scss";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Nav from "../Nav/Nav";

const About = (props) => {
  const [hasMargin, setHasMargin] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const tempHasMargin = currPos.y < -window.innerHeight + 20;
      if (tempHasMargin !== hasMargin) {
        setHasMargin(tempHasMargin);
      }
    },
    [hasMargin],
    false,
    false,
    300
  );

  return (
    <>
      <section className={styles.About} id="About">
        <Nav SetPath={props.SetPath} />
        <div className={styles.AboutContentContainer}>
          <div
            className={
              hasMargin
                ? styles.AboutContent + " " + styles.ExtraMargin
                : styles.AboutContent
            }
          >
            <h1>About</h1>
            <div className={styles.AboutText}>
              <p>
                <span className={styles.Colorized}>Hello! </span>
                My name is{" "}
                <span className={styles.ColorizedAlt}>Ruben Samuelsen. </span>
                I'm a{" "}
                <span className={styles.Colorized}>fullstack web-developer </span>
                with <span className={styles.ColorizedAlt}>2+ years </span> varied
                webdev experience using
                <span className={styles.ColorizedAlt}> technologies </span> such as{" "}
                <span className={styles.Colorized}>reactjs</span>, angular,{" "}
                <span className={styles.ColorizedAlt}>dotnet core</span>, es6,
                typescript, javascript, css, less, sass, webpack, parcel,
                expressjs, mongodb, sql and more.
              </p>
              <p>
                I specialize in <span className={styles.ColorizedAlt}>react</span> and{" "}
                <span className={styles.Colorized}>dotnet core</span>, but have used
                and will use plenty of other
                <span className={styles.ColorizedAlt}> technologies </span> in the
                future.
              </p>
              <p>
                I started my <span className={styles.Colorized}>dev journey </span> by
                making and publishing my own
                <span className={styles.ColorizedAlt}> games </span> using{" "}
                <span className={styles.Colorized}>c#</span> and unity. From there I
                went on to experiment with{" "}
                <span className={styles.Colorized}>webdev </span> for a year before
                landing my current job.
              </p>
              <p>
                I am very passionate about{" "}
                <span className={styles.Colorized}>software development</span>, I work
                to constantly <span className={styles.ColorizedAlt}>learn </span>{" "}
                something new and
                <span className={styles.Colorized}> improve</span>.
              </p>
              Dynamic <span className={styles.ColorizedAlt}>user friendly </span> web
              apps are my jam!
            </div>
            <div className={styles.SkillSeksjon}>
              <div className={styles.SkillCo1}></div>
              <div className={styles.SkillCo2}></div>
              <div className={styles.SkillCo3}></div>
              <div className={styles.SkillCo4}></div>
              <div className={styles.SkillCo5}></div>
              <div className={styles.SkillCo6}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
