import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

var menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Product',
    to: '/product-list',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  },
];
const MenuLink = ({label, to, exact}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to} >{label}</Link>
          </li>
        )
      }}
    />)
}


class Menu extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <a className="navbar-brand">SHOPPING</a> {/*eslint-disable-line */}
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }
  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (<MenuLink key={index} label={menu.name} to={menu.to} exact={menu.exact} />);
      });
    }
    return result;
  }
}

export default Menu;
