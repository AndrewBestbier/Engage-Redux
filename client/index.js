/* Css Imports */
import './css/material1.min.css';
import './css/material2.min.css';
import './css/main.css';

/* Non-component Imports */
import React from 'react';
import history from './js/utils/history'
import ReactDOM from 'react-dom';
import configureStore from './js/store/configureStore';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';

/* Component Imports */
import ChatContainer from './js/containers/ChatContainer';
import {AppContainer} from './js/containers/AppContainer';
import WelcomePage from './js/components/WelcomePage';
import Join from './js/components/Join';
import NavBar from './js/components/NavBar';
import Create from './js/components/Create';
import Dashboard from './js/components/Dashboard';

/* Auth Component Imports */
import Register from './js/components/auth/Register';
import Login from './js/components/auth/Login';

//Initialising
const store = configureStore();

/* Routes */
const routes = <Route component={AppContainer}>
  <Redirect from="/" to="welcome" />
  <Route path="welcome" component={WelcomePage} />
  <Route path="chat" component={ChatContainer} />
  <Route path="join" component={Join} />
  <Route path="register" component={Register} />
  <Route path="login" component={Login} />
  <Route path="create" component={Create} />
  <Route path="dashboard" component={Dashboard} />
</Route>;

/* Rendering */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('react')
);
