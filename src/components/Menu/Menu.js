import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <a className="navbar-brand">SHOPPING</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
