import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

class Dashboard extends Component {

  getCreatedRooms() {
    console.log(this.props.createdRooms);
    return this.props.createdRooms.valueSeq() || [];
  }

  createRoom(){
    const { dispatch } = this.props;

    let room = {
      name: 'Andrew Donal Bestbier',
    }

    dispatch(Actions.createRoom(room));
  }

  render() {

    return (
      <div className="container">
        <div className="card">
          <div className="card-header bgm-bluegray">
            <h2>Created Rooms</h2>
            <button className="btn bgm-blue btn-float waves-effect" onClick={::this.createRoom}><i className="zmdi zmdi-plus"></i></button>
          </div>
          <div className="card-body card-padding">
            <div className="row">

              {::this.getCreatedRooms().map(createdRoom =>
                <div className="col-sm-4">
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
    );
  }
}

function mapStateToProps(state) {
  return {
      createdRooms: state.user.get('createdRooms')
  }
}

export default connect(mapStateToProps)(Dashboard);
