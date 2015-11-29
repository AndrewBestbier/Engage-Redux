import React, { Component, PropTypes } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import _ from 'lodash';

export default class NavBar extends Component {

  getHeaderLinks() {
    var universalLinks = [<NavItem eventKey={1} href="#welcome">Welcome</NavItem>];
    var authenticatedLinks = [
      <NavItem eventKey={2} href="#chat">Chat</NavItem>,
      <NavItem eventKey={3} href="#welcome">Create</NavItem>,
      <NavItem eventKey={4} href="#join">Join</NavItem>,
      <NavItem eventKey={5} href="#welcome">Logout</NavItem>
    ];
    var unAuthenticatedLinks = [
      <NavItem eventKey={2} href="#login">Login</NavItem>,
      <NavItem eventKey={3} href="#register">Register</NavItem>
    ];

    if (this.props.authenticated) {
      return _.union(universalLinks, authenticatedLinks);
    } else {
      return _.union(universalLinks, unAuthenticatedLinks);
    }
  }

  render() {

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Engage</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {this.getHeaderLinks()}
        </Nav>
      </Navbar>
    );
  }
}
