import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__menu">
        <a href="#">Главная</a>
        <a href="#">Друзья</a>
        <a href="#">Watch</a>
        <a href="#">Группы</a>
        <a href="#">Игры</a>
      </div>
      <div className="header__user"></div>
    </div>
  )
}

export default Header;
