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

    const { actions } = this.props;

    this.socket.on('backchannel', message =>
      dispatch(this.props.actions.addMessage(message))
    );
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
      id: Date.now(),
      text: this.state.text,
      roomId: this.props.currentRoom
    };
    dispatch(this.props.actions.submitMessage(newMessage, this.socket));
    this.setState({showModal: false, text: ''})
  }

  render() {

    const filteredMessages = this.props.messages.map(message => <Card message={message} />);

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
