import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './Containers/LandingPage/LandingPage';
import Customers from './Containers/Customers/Customers';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/customers">
            <Customers/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
