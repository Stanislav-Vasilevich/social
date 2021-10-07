import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import {NavLink} from 'react-router-dom';
import Menu from '../Menu/Menu';

export type menuItemsType = {
  item: string
  path: string
}

export const menuItems: Array<menuItemsType> = [
  {item: 'Главная', path: '/publications'},
  {item: 'Друзья', path: '/friends'},
  {item: 'Watch', path: '/watch'},
  {item: 'Группы', path: '/group'},
  {item: 'Игры', path: '/games'}
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
