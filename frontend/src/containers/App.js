import React from "react";

import "../styles/App.scss";

import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import HostMenuView from "./HostMenuView";
import DecksView from "./DecksView";
import HostGamePage from "./HostGamePage";

import { Route, Switch } from "react-router-dom";
import HostGameView from "./HostGameView";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player" />

<<<<<<< HEAD
        <Route path="/host/edit/:id" />
        <Route path="/host/decks" component={DecksView}/>
        <Route path="/host/room" component={HostGamePage} />
        <Route path="/host" component={HostMenuView} />
=======
        <Route path="/host" component={HostGameView} />
>>>>>>> 257715f... Fix app redirects.

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
