import React, { Component, PropTypes } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import _ from 'lodash';

export default class NavBar extends Component {

  getHeaderLinks() {
    var universalLinks = [<li><a href="#welcome"><span className="tm-label">Welcome</span></a></li>];
    var authenticatedLinks = [
      <li><a href="#chat"><span className="tm-label">Chat</span></a></li>,
      <li><a href="#create"><span className="tm-label">Create</span></a></li>,
      <li><a href="#join"><span className="tm-label">Join</span></a></li>,
      <li><a href="#welcome"><span className="tm-label">Logout</span></a></li>
    ];
    var unAuthenticatedLinks = [
      <li><a href="#login"><span className="tm-label">Login</span></a></li>,
      <li><a href="#register"><span className="tm-label">Register</span></a></li>
    ];

    if (this.props.authenticated) {
      return _.union(universalLinks, authenticatedLinks);
    } else {
      //return _.union(universalLinks, unAuthenticatedLinks);
      return _.union(universalLinks, authenticatedLinks);
    }
  }

  render() {

    return (
      <header id="header" className="clearfix" data-current-skin="blue">
        <ul className="header-inner">
            <li id="menu-trigger" data-trigger="#sidebar">
                <div className="line-wrap">
                    <div className="line top"></div>
                    <div className="line center"></div>
                    <div className="line bottom"></div>
                </div>
            </li>

            <li className="logo hidden-xs">
                <a href="index.html">Material Admin</a>
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
