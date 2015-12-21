import {Map, List, fromJS} from 'immutable';

const initialState = List();

export default function(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_MESSAGE':
    return state.push(fromJS(action.data));;
  case 'JOINING_ROOM_SUCCESS':
    return state.merge(action.data).sort((a, b) => a.get('vote') < b.get('vote'));
  case 'LEFT_ROOM':
    return state.clear();
  case 'VOTE':
    return state.update(
      state.findIndex(function(message){
        //Finding the message that is being voted on
        return message.get('_id') === action.data._id;
      }), function(message){
        //Updating the vote count of that message. Note that this can be positive or negative
        return message.update('vote', vote => vote + action.data.vote);
      }
    ).sort((a, b) => a.get('vote') < b.get('vote')); //Sorting the questions by vote value
  default:
    return state;
  }
}
