import React from "react";
import "../styles/App.scss";

import PlayerLandingPage from './PlayerLandingPage';
import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import GameCodePage from "../containers/GameCodePage.js";
import PlayerGamePage from "./PlayerGamePage";
import EnterNicknamePage from "../containers/EnterNicknamePage.js";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player/room/:id" component={PlayerGamePage} />
        <Route path="/player" component={PlayerLandingPage} />

        <Route path="/host" />

        <Route path="/enter-code" component={GameCodePage}/>

        <Route path="/enter-nickname/:code" component={EnterNicknamePage}/>

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
