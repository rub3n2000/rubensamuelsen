import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './Containers/LandingPage/LandingPage';
import About from './Containers/About/About';
import Projects from './Containers/Projects/Projects';
import Contact from './Containers/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
        <LandingPage/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
