import {expect} from 'chai';

import {Map, fromJS, List} from 'immutable';

import reducer from '../../../client/js/reducers/rooms';

describe('room', () => {

  it('handles JOINING_ROOM_SUCCESS and sets the state appropriately', () => {

    const initialState = Map({
      currentRoom: null
    })

    const action = {
      type: 'JOINING_ROOM_SUCCESS',
      roomCode: '1234'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      currentRoom: '1234'
    }));
  });

  it('handles CREATE_ROOM_SUCCESS and sets the state appropriately', () => {

    const initialState = Map({
      createdRooms: List()
    })

    const action = {
      type: 'CREATE_ROOM_SUCCESS',
      data: {room: 'First Room'}
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      createdRooms: [{room: 'First Room'}]
    }));


    const secondAction = {
      type: 'CREATE_ROOM_SUCCESS',
      data: {room: 'Second Room'}
    };

    const finalState = reducer(nextState, secondAction);

    expect(finalState).to.equal(fromJS({
      createdRooms: [{room: 'First Room'}, {room: 'Second Room'}]
    }));
  });


  it('handles USER_LOGGED_IN and sets the state appropriately', () => {

    const initialState = Map({
      createdRooms: List()
    })

    const action = {
      type: 'USER_LOGGED_IN',
      data: [{room: 'First Room'}, {room: 'Second Room'}]
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      createdRooms: [{room: 'First Room'}, {room: 'Second Room'}]
    }));
  });

  it('handles LEFT_ROOM and sets the state appropriately', () => {

    const initialState = Map({
      currentRoom: '1234'
    })

    const action = {
      type: 'LEFT_ROOM'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      currentRoom: null
    }));
  });
});
