import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/App.scss";
import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import GameCodePage from "../containers/GameCodePage";
import PlayerGamePage from "./PlayerGamePage";
import PlayerLandingPage from './PlayerLandingPage';
import HostMenuView from "./HostMenuView";
import MyGamesPage from "./MyGamesPage";
import HostEditView from "./HostEditView";
import HostGamePage from "./HostGamePage";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player/room/:id" component={PlayerGamePage} />
        <Route path="/player" component={PlayerLandingPage} />

        <Route path="/host/edit/:id" component={HostEditView}/>
        <Route exact path="/host/edit/" component={HostEditView}/>
        <Route path="/host/decks" component={MyGamesPage}/>
        <Route path="/host/room/:id" component={HostGamePage} />
        <Route path="/host" component={HostMenuView} />

        <Route path="/enter-code" component={GameCodePage}/>

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
