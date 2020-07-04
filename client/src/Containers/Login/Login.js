import React, { useState, useEffect } from 'react';

import classes from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'; 
import myApi from '../../myApi';

const Login = ( props ) => {
    
    const[feedback, setFeedback] = useState(<div></div>);

    const Login = async (evt) => {
        evt.preventDefault();
        try {
            var response = myApi.post("/user/login", {username: username, password: password});
            setPassword("");
            setUsername("");
            if((await response).status == 201)
            {   
                props.setLoggedInTrue();
                setFeedback(<div className={classes.Success}>Welcome!</div>);
            }
            else {
            setFeedback(<div className={classes.Failure}>{(await response).data.message}</div>);
            }
        }
        catch {
            setFeedback(<div className={classes.Failure}>Something went wrong! Wrong password?</div>);
        }
    }   

    const usernameChangeHandler = (evt) => {
        setUsername(evt.target.value);
    }

    const passwordChangeHandler = (evt) => {
        setPassword(evt.target.value);
    }

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    
    return (
        <div className={classes.LoginDiv}>
            {feedback}
            <div className={classes.LoginForm}>
                <form onSubmit={Login}>
                <label>
                <FontAwesomeIcon icon={faAt}/> Username
                <input onChange={usernameChangeHandler} value={username} required placeholder="username" type="text"></input>
                </label>
                <label>
                <FontAwesomeIcon icon={faKey}/> Password
                <input onChange={passwordChangeHandler} value={password} required placeholder="password" type="password"></input>
                </label>
                <div className={classes.LoginButton}> 
                    <button>Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;