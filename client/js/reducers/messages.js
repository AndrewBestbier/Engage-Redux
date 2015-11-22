const initialState = {
  loaded: false,
  data: []
};
export default function messages(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_MESSAGE':
    return {...state,
      data: [...state.data, {
        id: (state.data.length === 0 ) ? 0 : state.data[state.data.length - 1].id + 1,
        text: action.message.text,
        time: action.message.time
      }]
    };
  default:
    return state;
  }
}
