import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
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
  console.log(state);
  return {
    authenticated: state.user.get('authenticated')
  };
}

export const AppContainer = connect(mapStateToProps, Actions)(App);
