import React, { Component, PropTypes } from 'react';
import {Button, Modal, Input, Panel} from 'react-bootstrap';
import strftime from 'strftime';
import Card from './Card';

export default class Chat extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      showModal: false,
    };
  }

  componentDidMount() {
    this.socket = io.connect();
    const { dispatch } = this.props;
    this.socket.emit('subscribe', this.props.currentRoom);

    this.socket.on('broadcast message', message =>
      dispatch(this.props.actions.addMessage(message))
    );

    this.socket.on('broadcast vote', message =>
      dispatch(this.props.actions.vote(message))
    );
  }

  componentWillUnmount(){
    this.socket.emit('unsubscribe', this.props.currentRoom); //Doesn't work currently
    const { dispatch } = this.props;
    dispatch(this.props.actions.leaveRoom());
  }

  close() {
    this.setState({ showModal: false });
  }

  open(){
    this.setState({showModal: true})
  }

  handleChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(){
    const { dispatch } = this.props;

    let newMessage = {
      text: this.state.text,
      roomId: this.props.currentRoom,
      vote: 0 //Don't bother trying to change this hacker :) I have checks in place for you.
    };
    dispatch(this.props.actions.submitMessage(newMessage, this.socket));
    this.setState({showModal: false, text: ''})
  }

  handleVote(_id, voteValue){
    const { dispatch } = this.props;

    let newMessage = {
      _id: _id,
      vote: voteValue,
      roomId: this.props.currentRoom
    };

    dispatch(this.props.actions.voteAction(newMessage, this.socket));
  }

  render() {

    const filteredMessages = this.props.messages.map(message => <Card message={message} handleVote={::this.handleVote} key={message._id} />);

    return (
      <div>
        <div className='container'><div className='row'>{filteredMessages}</div></div>

        <Button bsStyle="primary" onClick={::this.open}>Ask</Button>

        <Modal show={this.state.showModal} onHide={::this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input type="text" label="Text" placeholder="Enter text" value={this.state.text} onChange={::this.handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={::this.close}>Close</Button>
            <Button onClick={::this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
