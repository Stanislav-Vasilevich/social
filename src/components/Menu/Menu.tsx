import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";

// деструктуризация CSS
const {menu, item, active} = styles;

const Menu = () => {
  return (
    <nav className={menu}>
      <NavLink className={item} activeClassName={active} to="/publications">Публикации</NavLink>
      <NavLink className={item} activeClassName={active} to="/information">Информация</NavLink>
      <NavLink className={item} activeClassName={active} to="/friends">Друзья</NavLink>
      <NavLink className={item} activeClassName={active} to="/photo">Фото</NavLink>
      <NavLink className={item} activeClassName={active} to="/stories">Архив историй</NavLink>
      <NavLink className={item} activeClassName={active} to="/video">Видео</NavLink>
      <NavLink className={item} activeClassName={active} to="/else">Еще</NavLink>
    </nav>
  )
}

export default Menu;
