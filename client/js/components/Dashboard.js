import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Button, Modal, Input, Panel} from 'react-bootstrap';
import * as Actions from '../actions/Actions';

class Dashboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      createRoomName: '',
      showModal: false,
    };
  }

  getCreatedRooms() {
    return this.props.createdRooms.valueSeq() || [];
  }

  createRoom(){
    const { dispatch } = this.props;

    let room = {
      name: this.state.createRoomName
    }

    dispatch(Actions.createRoom(room));
    this.setState({ showModal: false });
  }

  openModal(){
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  handleChange(event){
    this.setState({createRoomName: event.target.value})
  }

  joinCreatedRoom(e){
    const { dispatch } = this.props;
    dispatch(Actions.joinRoom(e.get('_id')));
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-header bgm-bluegray">
              <h2>Created Rooms</h2>
              <button className="btn bgm-blue btn-float waves-effect" onClick={::this.openModal}><i className="zmdi zmdi-plus"></i></button>
            </div>
            <div className="card-body card-padding">
              <div className="row">

                {::this.getCreatedRooms().map(createdRoom =>
                  <div className="col-sm-4" onClick={this.joinCreatedRoom.bind(this, createdRoom)}>
                    <div className="card">
                        <div className="card-header bgm-cyan">
                            <h2>{createdRoom.get('name')}</h2>
                        </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={::this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create a room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input type="text" label="Room Name" placeholder="Enter the name of the room" value={this.state.text} onChange={::this.handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={::this.close}>Close</Button>
            <Button onClick={::this.createRoom}>Create Room</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      createdRooms: state.user.get('createdRooms')
  }
}

export default connect(mapStateToProps)(Dashboard);
