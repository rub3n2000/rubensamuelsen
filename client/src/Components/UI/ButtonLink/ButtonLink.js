import React from "react";

import styles from "./ButtonLink.module.scss";

const ButtonLink = (props) => {
  return (
    <div
      className={styles.ButtonLink}
      onClick={() => {
        window.open(props.link, "_blank");
      }}
    >{props.children}</div>
  );
  return null;
};

export default ButtonLink;
