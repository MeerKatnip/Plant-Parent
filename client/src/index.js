import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, Menu } from "./App";
import * as serviceWorker from "./serviceWorker";
// import { BaseLayout } from "./components/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DisplayPlants from "./components/DisplayPlants";
import AddPlant from "./components/AddPlant";
import PlantDetails from "./components/PlantDetails";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={DisplayPlants} path="/api/plants" exact />
          <Route component={AddPlant} path="/addplant" />
          <Route component={PlantDetails} path="/displayplants/:plantId" />
          <Route component={RegistrationForm} path="/register" />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
