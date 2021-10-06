import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="menu">
        <NavLink className="item" activeClassName="active" to="/publications">Главная</NavLink>
        <NavLink className="item" activeClassName="active" to="/friends">Друзья</NavLink>
        <NavLink className="item" activeClassName="active" to="/watch">Watch</NavLink>
        <NavLink className="item" activeClassName="active" to="/group">Группы</NavLink>
        <NavLink className="item" activeClassName="active" to="/games">Игры</NavLink>
      </div>
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
