import {expect} from 'chai';

import {Map, List, fromJS} from 'immutable';

import reducer from '../../client/js/reducers/messages';

describe('messages', () => {

  it('handles RECEIVE_MESSAGE and sets the state appropriately', () => {
    const initialState = Map({
      messages: List()
    })

    const action = {
      type: 'RECEIVE_MESSAGE',
      message: {
        text: 'First message'
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      messages: List.of('First message')
    }))


    const secondAction = {
      type: 'RECEIVE_MESSAGE',
      message: {
        text: 'Second Message'
      }
    };

    const finalState = reducer(nextState, secondAction);

    expect(finalState).to.equal(Map({
      messages: List.of('First message', 'Second Message')
    }))

  });
});
