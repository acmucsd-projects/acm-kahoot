import React from 'react';

import '../styles/App.scss';

import UniversalLandingPage from '../containers/UniversalLandingPage.js';

import {
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className='App glow'>
      <Switch>
        <Route path="/player">
        </Route>

        <Route path="/host">
        </Route>
        
        <Route path="/">
          <UniversalLandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
