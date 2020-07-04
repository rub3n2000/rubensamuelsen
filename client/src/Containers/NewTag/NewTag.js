import React from "react";

import classes from "./NewTag.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

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
  } else {
    return <></>;
  }
};

export default NewTag;
