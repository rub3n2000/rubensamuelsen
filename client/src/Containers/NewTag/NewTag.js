import React, { useState, useEffect } from "react";

import classes from "./NewTag.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import myApi from "../../myApi";

const NewTag = (props) => {
  
  if (props.visible) {
    return (
      <div className={classes.NewTagDiv}>
        <div className={classes.NewTagForm}>
          <form onSubmit={props.newTag}>
            <label>
              <FontAwesomeIcon icon={faAt} /> Tag
              <input
                onChange={props.tagChangeHandler}
                required
                placeholder="tag"
                type="text"
              ></input>
            </label>
            <div className={classes.NewTagButton}>
              <button>Create New</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  else {
      return(
          <></>
      );
  }
};

export default NewTag;
