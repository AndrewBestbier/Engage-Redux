import {expect} from 'chai';

import {Map, fromJS, List} from 'immutable';

import reducer from '../../client/js/reducers/user';

describe('user', () => {

  it('handles USER_LOGGED_IN and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: false
    })

    const action = {
      type: 'USER_LOGGED_IN'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: true
    }));
  });


  it('handles USER_LOGGED_OUT and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: true
    })

    const action = {
      type: 'USER_LOGGED_OUT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: false
    }));
  });

  /*
  it('handles CREATE_ROOM_SUCCESS and sets the state appropriately', () => {
    const initialState = Map({
      authenticated: false,
      createdRooms: List()
    })

    const action = {
      type: 'CREATE_ROOM_SUCCESS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      authenticated: false
    }));
  }); */
});
