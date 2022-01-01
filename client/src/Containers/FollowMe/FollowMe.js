import React from "react";
import styles from "./FollowMe.module.scss";

const FollowMe = () => {
  return (
    <div className={styles.FollowMe}>
      <ul>
        <li>
          <a
            className={styles.twitter}
            target="_blank"
            href="https://twitter.com/RubyIEDev"
            title="Follow On Twitter"
          >
            <span>Follow on Twitter</span>
          </a>
        </li>
        <li>
          <a
            className={styles.github}
            target="_blank"
            href="https://github.com/rub3n2000"
            title="Follow On Github"
          >
            <span>Follow on Github</span>
          </a>
        </li>
        <li>
          <a
            className={styles.linkedin}
            target="_blank"
            href="https://www.linkedin.com/in/ruben-samuelsen/"
            title="Add to LinkedIn network"
          >
            <span>Add to LinkedIn network</span>
          </a>
        </li>
        <li>
          <a
            className={styles.email}
            target="_blank"
            href="mailto:mail@rubensamuelsen.com"
            title="Send me an Email"
          >
            <span>Send me an Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowMe;
