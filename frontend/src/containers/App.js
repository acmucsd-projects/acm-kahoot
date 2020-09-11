import React from "react";

import "../styles/App.scss";

import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import HostMenuView from "./HostMenuView";
import DecksView from "./DecksView";
import HostEditView from "./HostEditView";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player" />

        <Route path="/host/edit/:id" component={HostEditView}/>
        <Route exact path="/host/edit/" component={HostEditView}/>
        <Route path="/host/decks" component={DecksView}/>
        <Route path="/host/room/:id" />
        <Route path="/host" component={HostMenuView} />

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
