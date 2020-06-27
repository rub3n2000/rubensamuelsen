import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import MainPage from './Containers/MainPage/MainPage';
import AdminPanel from './Containers/AdminPanel/AdminPanel';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Switch>
      <Route path="/admin" render={AdminPanel}/>
      <Route path="/" render={MainPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
