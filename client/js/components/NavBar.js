import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class NavBar extends Component {

  getHeaderLinks() {
    var universalLinks = [<li key="welcome"><a href="#welcome"><span className="tm-label">Welcome</span></a></li>];
    var authenticatedLinks = [
      <li key="chat"><a href="#chat"><span className="tm-label">Chat</span></a></li>,
      <li key="dashboard"><a href="#dashboard"><span className="tm-label">Dashboard</span></a></li>,
      <li key="join"><a href="#join"><span className="tm-label">Join</span></a></li>,
      <li key="logout"><a onClick={::this.props.logout}><span className="tm-label">Logout</span></a></li>
    ];
    var unAuthenticatedLinks = [
      <li key="login"><a href="#login"><span className="tm-label">Login</span></a></li>,
      <li key="register"><a href="#register"><span className="tm-label">Register</span></a></li>
    ];

    if (this.props.authenticated) {
      return _.union(universalLinks, authenticatedLinks);
    } else {
      return _.union(universalLinks, unAuthenticatedLinks);
    }
  }

  render() {

    return (
      <header id="header" className="clearfix" data-current-skin="blue">
        <ul className="header-inner">

            <li className="logo">
                <a href="index.html">Engage</a>
            </li>

            <li className="pull-right">
                <ul className="top-menu">
                    {this.getHeaderLinks()}
                </ul>
            </li>
        </ul>
      </header>
    );
  }
}
