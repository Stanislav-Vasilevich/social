import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
          <img src={logo} alt="logo"/>
      </div>
      <div className="header__menu">
        <NavLink to="/publications">Главная</NavLink>
        <NavLink to="Friends">Друзья</NavLink>
        <NavLink to="Watch">Watch</NavLink>
        <NavLink to="#">Группы</NavLink>
        <NavLink to="#">Игры</NavLink>
      </div>
      <div className="header__user">Stanislav Vasilevich</div>
    </div>
  )
}

export default Header;
