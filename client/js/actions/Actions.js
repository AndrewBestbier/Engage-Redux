export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}
