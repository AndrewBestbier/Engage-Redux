import {expect} from 'chai';

import {Map, fromJS} from 'immutable';

import reducer from '../../client/js/reducers/user';

describe('user', () => {

  it('handles AUTH_SIGNIN and sets the state appropriately', () => {
    const initialState = Map();

    const action = {
      type: 'AUTH_SIGNIN'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: true
    }));
  });

  it('handles AUTH_SIGNOUT and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: true
    });

    const action = {
      type: 'AUTH_SIGNOUT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: false
    }));
  });
});
