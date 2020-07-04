import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import myApi from "../../myApi";

import classes from "./Login.module.scss";

const Login = (props) => {
  //#region State definitions
  const [feedback, setFeedback] = useState(<div></div>);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //#endregion

  //#region Handler Methods
  const login = async (evt) => {
    evt.preventDefault();
    try {
      var response = myApi.post("/user/login", {
        username: username,
        password: password,
      });
      setPassword("");
      setUsername("");
      if ((await response).status === 201) {
        props.setLoggedInTrue();
        setFeedback(<div className={classes.Success}>Welcome!</div>);
      } else {
        setFeedback(
          <div className={classes.Failure}>{(await response).data.message}</div>
        );
      }
    } catch {
      setFeedback(
        <div className={classes.Failure}>
          Something went wrong! Wrong password?
        </div>
      );
    }
  };

  const usernameChangeHandler = (evt) => {
    setUsername(evt.target.value);
  };

  const passwordChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };
  //#endregion
  
  return (
    <div className={classes.LoginDiv}>
      {feedback}
      <div className={classes.LoginForm}>
        <form onSubmit={login}>
          <label>
            <FontAwesomeIcon icon={faAt} /> Username
            <input
              onChange={usernameChangeHandler}
              value={username}
              required
              placeholder="username"
              type="text"
            ></input>
          </label>
          <label>
            <FontAwesomeIcon icon={faKey} /> Password
            <input
              onChange={passwordChangeHandler}
              value={password}
              required
              placeholder="password"
              type="password"
            ></input>
          </label>
          <div className={classes.LoginButton}>
            <button>login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
