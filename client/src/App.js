import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './Containers/LandingPage/LandingPage';
import Customers from './Containers/Customers/Customers';

function App() {
  
  const[path, setPath] = useState("/");
  
  const SetPath = (text) =>{
    setPath(text);
  }

  let content = <></>;

  if(path == "/") {
    content = <LandingPage SetPath={SetPath}/>;
  }

  useEffect(() => {
    if(path == "/customers")
    {
      content = <Customers SetPath={SetPath}/>;
    }
  }, [path]);

return (
  <div className={styles.App}>
    {content}
  </div>
);

}

export default App;
