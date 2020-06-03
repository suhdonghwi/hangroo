import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect, useLocation} from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBar from 'components/NavBar';

import MainPage from 'pages/MainPage';
import PrincipalPage from 'pages/PrincipalPage';
import PeoplePage from 'pages/PeoplePage';

// @ts-ignore
import HistoryPage from './pages/HistoryPage.jsx';

function NavBarWrapper() {
  const loc = useLocation();
  if (loc.pathname === '/') return null;

  const isDark = loc.pathname === '/history/';
  return <NavBar isDark={isDark} currentPath={loc.pathname}/>;
}

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBarWrapper/>

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/principal/" component={PrincipalPage} />
        <Route path="/people/" component={PeoplePage} />
        <Route path="/history/" component={HistoryPage} />

        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
