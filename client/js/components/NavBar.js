import React, { Component, PropTypes } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import _ from 'lodash';

export default class NavBar extends Component {

  getHeaderLinks() {
    var universalLinks = [<a href="#welcome" className="home-link ellipsis">Welcome</a>];
    var authenticatedLinks = [
      <a href="#chat" className="home-link ellipsis">Chat</a>,
      <a href="#create" className="home-link ellipsis">Create</a>,
      <a href="#join" className="home-link ellipsis">Join</a>,
      <a href="#welcome" className="home-link ellipsis">Logout</a>
    ];
    var unAuthenticatedLinks = [
      <a href="#login" className="home-link ellipsis">Login</a>,
      <a href="#register" className="home-link ellipsis">Register</a>
    ];

    if (this.props.authenticated) {
      return _.union(universalLinks, authenticatedLinks);
    } else {
      return _.union(universalLinks, unAuthenticatedLinks);
      //return _.union(universalLinks, authenticatedLinks);
    }
  }

  render() {

    return (


      <div id="top-header-container" className="clearfix athena-big-menu profile-header-scroll" style={{top: 0}}>
        <div id="top-header" className="new">
        <nav className="sitewide-navigation" role="navigation">
            <span className="links nav-subheader">
                <a id="header-logo" href="/" className="nav-link no-menu show-demo-dialog" data-tag="Header" aria-label="Khan Academy"><span className="logotype" aria-hidden="true"><span className="logotype-khan">Engage</span></span></a>
            </span>
        </nav>
        <span id="page_auth" className="pure-hidden-xs pure-hidden-sm">
          {this.getHeaderLinks()}
        </span>
      </div>
      </div>

    );
  }
}
