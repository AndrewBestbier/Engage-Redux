import {expect} from 'chai';

import {Map, fromJS} from 'immutable';

import reducer from '../../client/js/reducers/user';

describe('user', () => {

  it('handles USER_LOGIN_SUCCEEDED and sets the state appropriately', () => {
    const initialState = Map();

    const action = {
      type: 'USER_LOGGED_IN'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: true
    }));
  });

  it('handles USER_LOGOUT and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: true
    });

    const action = {
      type: 'USER_LOGOUT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: false
    }));
  });
});
