/* Non-component Imports */
import './css/bootstrap.min.css';
import './css/main.css';
import React from 'react';
import Root from './js/containers/Root';
import HashHistory from 'react-router/lib/HashHistory';
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
import Register from './js/components/Register';
import Login from './js/components/Login';
import Create from './js/components/Create';

//Initialising
const store = configureStore();
const history = new HashHistory();

/* Routes */
const routes = <Route component={AppContainer}>
  <Redirect from="/" to="/welcome" />
  <Route path="/welcome" component={WelcomePage} />
  <Route path="/chat" component={ChatContainer} />
  <Route path="/join" component={Join} />
  <Route path="/register" component={Register} />
  <Route path="/login" component={Login} />
  <Route path="/create" component={Create} />
</Route>;

/* Rendering */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('react')
);
