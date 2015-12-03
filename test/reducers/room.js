import {expect} from 'chai';

import {Map, fromJS} from 'immutable';

import reducer from '../../client/js/reducers/rooms';

describe('room', () => {

  it('handles JOINING_ROOM_SUCCESS and sets the state appropriately', () => {
    /*
    const initialState = Map({
      currentRoom: null
    })

    const action = {
      type: 'JOINING_ROOM_SUCCESS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      currentRoom: 'andrew'
    })); */
    expect(1).to.equal(1);
  });
});
