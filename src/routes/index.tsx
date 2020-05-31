import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainPage from 'pages/MainPage';
import PrincipalPage from 'pages/PrincipalPage';

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/principal" component={PrincipalPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
