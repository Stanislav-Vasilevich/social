import React from 'react';
import styles from './Menu.module.css';

// деструктуризация CSS
const {menu, item} = styles;

const Menu = () => {
  return (
    <nav className={menu}>
      <a className={item} href="#">Публикации</a>
      <a className={item} href="#">Информация</a>
      <a className={item} href="#">Друзья</a>
      <a className={item} href="#">Фото</a>
      <a className={item} href="#">Архив историй</a>
      <a className={item} href="#">Видео</a>
      <a className={item} href="#">Еще</a>
    </nav>
  )
}

export default Menu;
