import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import {MenuItemsType} from '../../../redux/store';

type PropsType = {
  menuItems: Array<MenuItemsType>
}

const Navigation = (props: PropsType) => {
  const menuItem = props.menuItems.map(i => {
    return (
      <NavLink
        key={i.id}
        to={i.path}
        className={(params) => params.isActive ? s.active : s.item}
      >
        {i.item}
      </NavLink>
    )
  });

  return (
    <nav className={s.navigation}>
      {menuItem}
    </nav>
  );
}

export default Navigation;
