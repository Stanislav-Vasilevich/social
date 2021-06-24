import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav className="menu">
      <a className="menu__item" href="#">Публикации</a>
      <a className="menu__item" href="#">Информация</a>
      <a className="menu__item" href="#">Друзья</a>
      <a className="menu__item" href="#">Фото</a>
      <a className="menu__item" href="#">Архив историй</a>
      <a className="menu__item" href="#">Видео</a>
      <a className="menu__item" href="#">Еще</a>
    </nav>
  )
}

export default Menu;
