import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

// CSS
const {menu, item, active} = styles;

type PropsType = {
  items: Array<menuItemsType>
}

export type menuItemsType = {
  id: number
  item: string
  path: string
}

const Menu = (props: PropsType) => {

  const itemMenu = props.items.map(i => {
    return <NavLink key={i.id} className={item} activeClassName={active} to={i.path}>{i.item}</NavLink>
  });

  return (
    <nav className={menu}>
      {itemMenu}
    </nav>

    // <nav className={menu}>
    //   <NavLink className={item} activeClassName={active} to="/publications">Публикации</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/information">Информация</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/friends">Друзья</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/photo">Фото</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/stories">Архив историй</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/video">Видео</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/else">Еще</NavLink>
    // </nav>

  // <nav className="menu">
  //   <NavLink className="item" activeClassName="active" to="/publications">Главная</NavLink>
  //   <NavLink className="item" activeClassName="active" to="/friends">Друзья</NavLink>
  //   <NavLink className="item" activeClassName="active" to="/watch">Watch</NavLink>
  //   <NavLink className="item" activeClassName="active" to="/group">Группы</NavLink>
  //   <NavLink className="item" activeClassName="active" to="/games">Игры</NavLink>
  // </nav>
  );
}

export default Menu;
