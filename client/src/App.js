import React, { useState } from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './Containers/LandingPage/LandingPage';
import Customers from './Containers/Customers/Customers';

function App() {
  const[path, setPath] = useState("/");

  let content = <></>;

  if(path == "/") {
    content = <LandingPage SetPath={SetPath}/>;
  }
  else if(path == "/customers")
  {
    content = <Customers SetPath={SetPath}/>;
  }

  const SetPath = (text) =>{
    setPath(text);
  }

  return (
    <div className={styles.App}>
      {content}
    </div>
  );
}

export default App;
