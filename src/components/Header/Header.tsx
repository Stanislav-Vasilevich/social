import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import {NavLink} from 'react-router-dom';
import Menu, {menuItemsType} from '../Menu/Menu';

export const menuItems: Array<menuItemsType> = [
  {id: 1, item: 'Главная', path: '/publications'},
  {id: 2, item: 'Друзья', path: '/friends'},
  {id: 3, item: 'Watch', path: '/watch'},
  {id: 4, item: 'Группы', path: '/group'},
  {id: 5, item: 'Игры', path: '/games'}
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <Menu items={menuItems}/>
      {/*<nav className="menu">*/}
      {/*  <NavLink className="item" activeClassName="active" to="/publications">Главная</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/friends">Друзья</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/watch">Watch</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/group">Группы</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/games">Игры</NavLink>*/}
      {/*</nav>*/}
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
