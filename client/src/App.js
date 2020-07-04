//#region Imports
  //#region Module dependencies
  import React from "react";
  import { Route, Switch, BrowserRouter } from "react-router-dom";
  //#endregion

  //#region Component imports
  import MainPage from "./Containers/MainPage/MainPage";
  import AdminPanel from "./Containers/AdminPanel/AdminPanel";
  //#endregion

  //#region Style imports
  import styles from "./App.module.scss";
  //#endregion
//#endregion

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminPanel} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
