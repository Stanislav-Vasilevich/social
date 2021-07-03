import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';

console.log(logo)

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
          <img src={logo} alt="logo"/>
      </div>
      <div className="header__menu">
        <a href="#">Главная</a>
        <a href="#">Друзья</a>
        <a href="#">Watch</a>
        <a href="#">Группы</a>
        <a href="#">Игры</a>
      </div>
      <div className="header__user">Stanislav Vasilevich</div>
    </div>
  )
}

export default Header;
