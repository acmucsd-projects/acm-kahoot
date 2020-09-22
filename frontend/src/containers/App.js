import React from 'react';
import '../styles/App.scss';
import PlayerLandingPage from './PlayerLandingPage';
import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player" component={PlayerLandingPage} />

        <Route path="/host" />

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
    </div>
  );
}

export default App;
