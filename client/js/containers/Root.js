import React, { Component, PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import ChatContainer from './ChatContainer';
import WelcomePage from '../components/WelcomePage';
import Join from '../components/Join';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import configureStore from '../store/configureStore';
const store = configureStore();

export default class Root extends Component {

  render() {
    const { history } = this.props;

    return (
      <div className="root">
        <NavBar />
        <Provider store={store} >
          <Router history={history}>
            <Redirect from="/" to="/welcome" />
            <Route path="/welcome" component={WelcomePage} />
            <Route path="/chat" component={ChatContainer} />
            <Route path="/join" component={Join} />
            <Route path="/sign-up" component={SignUp} />
          </Router>
        </Provider>
      </div>
    );
  }
}
