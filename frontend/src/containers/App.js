<<<<<<< HEAD
import React from "react";

import "../styles/App.scss";

import UniversalLandingPage from "../containers/UniversalLandingPage.js";
import HostMenuView from "./HostMenuView";
import DecksView from "./DecksView";
import HostGamePage from "./HostGamePage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App glow">
      <Switch>
        <Route path="/player" />

        <Route path="/host/edit/:id" />
        <Route path="/host/decks" component={DecksView}/>
        <Route path="/host/room" component={HostGamePage} />
        <Route path="/host" component={HostMenuView} />

        <Route path="/" component={UniversalLandingPage} />
      </Switch>
=======
import React from 'react';
import '../styles/App.scss';

import HostGameView from './HostGameView';

function App() {
  return (
    <div className='App glow'>
      <HostGameView />
>>>>>>> 24d7c9a... Display a mock-up of the Host's in-game view.
    </div>
  );
}

export default App;
