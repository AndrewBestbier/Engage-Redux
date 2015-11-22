import React, { Component, PropTypes } from 'react';
import {Button, Modal, Input, Panel} from 'react-bootstrap';
import strftime from 'strftime';

const socket = io.connect('http://localhost');

export default class Chat extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      showModal: false
    };
  }

  componentWillMount(){
    const { actions } = this.props;

    socket.on('backchannel', message =>
      actions.addMessage(message)
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

    let newMessage = {
      id: Date.now(),
      text: this.state.text,
      time: strftime('%H:%M %p', new Date())
    };

    socket.emit('new message', newMessage);

    this.setState({showModal: false, text: ''})
  }

  render() {

    const filteredMessages = this.props.messages.map(message => <div className='col-md-12'><Panel>{message.text}</Panel></div>);



    return (
      <div>
        <h2>Chat</h2>
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
