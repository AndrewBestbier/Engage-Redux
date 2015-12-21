import {expect} from 'chai';

import {Map, List, fromJS} from 'immutable';

import reducer from '../../../client/js/reducers/messages';

describe('messages', () => {

  it('handles RECEIVE_MESSAGE and sets the state appropriately', () => {
    const initialState = List();

    const action = {
      type: 'RECEIVE_MESSAGE',
      data: {text: 'First Message'}
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{text: 'First Message'}]
    ))


    const secondAction = {
      type: 'RECEIVE_MESSAGE',
      data: {text: 'Second Message'}
    };

    const finalState = reducer(nextState, secondAction);

    expect(finalState).to.equal(fromJS(
      [{text: 'First Message'}, {text: 'Second Message'}]
    ))
  });

  it('handles JOINING_ROOM_SUCCESS and sets the state appropriately', () => {
    const initialState = List();

    const action = {
      type: 'JOINING_ROOM_SUCCESS',
      data: [{text: 'First Message'}, {text: 'Second Message'}, {text: 'Third Message'}]
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{text: 'First Message'}, {text: 'Second Message'}, {text: 'Third Message'}]
    ))
  });


  it('handles LEFT_ROOM and sets the state appropriately', () => {
    /* Adding messages to the room */
    const initialState = List();

    const action = {
      type: 'JOINING_ROOM_SUCCESS',
      data: [{text: 'First Message'}, {text: 'Second Message'}, {text: 'Third Message'}]
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS(
      [{text: 'First Message'}, {text: 'Second Message'}, {text: 'Third Message'}]
    ));

    /* Leaving the room */
    const clearAction = {
      type: 'LEFT_ROOM'
    };

    const finalState = reducer(nextState, clearAction);

    expect(finalState).to.equal(List());
  });

  it('handles both positive and negative VOTE actions and sorts the result by vote', () => {
    const initialState = fromJS(
      [{_id: 'a1', text: 'First Message', vote: 0}, {_id: 'a2', text: 'Second Message', vote: 0}, {_id: 'a3', text: 'Third Message', vote: 0}]
    );

    /* Up Vote */
    const upVoteAction = {
      type: 'VOTE',
      data: {_id: 'a1', vote: 1 }
    };

    const nextState = reducer(initialState, upVoteAction);

    expect(nextState).to.equal(fromJS(
      [{_id: 'a1', text: 'First Message', vote: 1}, {_id: 'a2', text: 'Second Message', vote: 0}, {_id: 'a3', text: 'Third Message', vote: 0}]
    ));

    /* Down Vote */
    const downVoteAction = {
      type: 'VOTE',
      data: {_id: 'a2', vote: -1 }
    };

    const finalState = reducer(nextState, downVoteAction);

    /* Note that a2 is sorted last here */
    expect(finalState).to.equal(fromJS(
      [{_id: 'a1', text: 'First Message', vote: 1}, {_id: 'a3', text: 'Third Message', vote: 0}, {_id: 'a2', text: 'Second Message', vote: -1}]
    ));

  })
});
