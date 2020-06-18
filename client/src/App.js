import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './Containers/LandingPage/LandingPage';
import About from './Containers/About/About';

function App() {
  return (
    <div className={styles.App}>
        <LandingPage/>
        <About/>
    </div>
  );
}

export default App;
