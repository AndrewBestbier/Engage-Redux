import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
import NavBar from '../components/NavBar';

export const App = React.createClass({

  render() {
    return (
      <div>
        <div>
          <NavBar {...this.props} />
          {this.props.children}
        </div>
      </div>
    );
  }
});

/* Reflux connector */
function mapStateToProps(state) {
  return {
    authenticated: state.user.get('authenticated'),
    currentRoom: state.rooms.get('currentRoom')
  };
}

export const AppContainer = connect(mapStateToProps, authActions)(App);
