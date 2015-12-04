import React, { Component, PropTypes } from 'react';

export default class Card extends Component {


  render() {
    return (
      <div className="card">
        <div className="card-header ch-alt m-b-20">
            <h2>{this.props.mainText}</h2>
            <ul className="actions">
                <li>
                    <a>
                        <i className="zmdi zmdi-long-arrow-down"></i>
                    </a>
                </li>
                <li>
                    <h2>5</h2>
                </li>
                <li>
                    <a>
                        <i className="zmdi zmdi-long-arrow-up"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}
