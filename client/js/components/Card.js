import React, { Component, PropTypes } from 'react';

export default class Card extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header ch-alt">
          <h2>{this.props.message.get('text')}</h2>
            <ul className="actions">
              <li>
                <a onClick={::this.props.handleVote.bind(this, this.props.message.get('_id'), -1)}>
                    <i className="zmdi zmdi-long-arrow-down"></i>
                </a>
              </li>
              <li>
                <a>
                    <i className="zmdi">{this.props.message.get('vote')}</i>
                </a>
              </li>
              <li>
                <a onClick={::this.props.handleVote.bind(this, this.props.message.get('_id'), 1)}>
                    <i className="zmdi zmdi-long-arrow-up"></i>
                </a>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
