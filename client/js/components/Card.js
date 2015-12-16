import React, { Component, PropTypes } from 'react';

export default class Card extends Component {

  render() {
    return (
      <div className="panel panel-default" key={this.props.message.get('_id')}>
        <div className="panel-body">
          <div className="panel-heading">
            <div className="btn-group pull-right">
              <a href="#" className="btn btn-default btn-xs">## Lock</a>
              <a href="#" className="btn btn-default btn-xs">## Delete</a>
              <a href="#" className="btn btn-default btn-xs">## Move</a>
            </div>
            <h4 className="panel-title">{this.props.message.get('text')}</h4>
          </div>
        </div>
      </div>
    );
  }
}
