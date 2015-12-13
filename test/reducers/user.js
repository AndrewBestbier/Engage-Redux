import {expect} from 'chai';

import {Map, fromJS} from 'immutable';

import reducer from '../../client/js/reducers/user';

describe('user', () => {

  it('handles USER_LOGGED_IN and sets the state appropriately', () => {
    const initialState = Map();

    const action = {
      type: 'USER_LOGGED_IN',
      data: [{name: 'hello', id: 1}, {name: 'world', id: 2}]
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: true,
      createdRooms: [{name: 'hello', id: 1}, {name: 'world', id: 2}]
    }));
  });


  it('handles USER_LOGGED_OUT and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: true
    });

    const action = {
      type: 'USER_LOGGED_OUT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: false
    }));
  });
});
