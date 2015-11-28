import React, { Component, PropTypes } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class NavBar extends Component {

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Engage</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#welcome">Welcome</NavItem>
          <NavItem eventKey={2} href="#chat">Chat</NavItem>
          <NavItem eventKey={2} href="#join">Join</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
