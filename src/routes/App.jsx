import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/index';

import './App.styl';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route component={error404} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
