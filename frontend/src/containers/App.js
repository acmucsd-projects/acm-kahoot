import React from 'react';
import '../styles/App.scss';
import PlayerLandingPage from './PlayerLandingPage';
import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import HostMenuView from "./HostMenuView";
import DecksView from "./DecksView";
import HostGamePage from "./HostGamePage";

import GameCodePage from "../containers/GameCodePage.js";
import EnterNicknamePage from "../containers/EnterNicknamePage.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player" component={PlayerLandingPage} />

        <Route path="/host/edit/:id" />
        <Route path="/host/decks" component={DecksView}/>
        <Route path="/host/room/:id" component={HostGamePage} />
        <Route path="/host" component={HostMenuView} />

        <Route path="/enter-code" component={GameCodePage}/>

        <Route path="/enter-nickname/:code" component={EnterNicknamePage}/>

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
