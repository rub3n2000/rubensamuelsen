//#region Imports
  //#region Module dependencies
  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
  //#endregion
  //#region  Style imports
  import styles from "./UnAuthorized.module.scss";
  //#endregion
//#endregion

const UnAuthorized = () => {
  return (
    <div className={styles.UnAuthorized}>
      <div className={styles.Info}>
        <div className={styles.Trekant}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className={styles.Text}>
          <h2>You are not an admin!</h2>
        </div>
        <div
          className={styles.Button}
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Go back to homepage.
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
