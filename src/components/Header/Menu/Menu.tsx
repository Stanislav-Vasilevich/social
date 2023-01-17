import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {FriendsNavigationType} from '../../../redux/friends-reducer';

type PropsType = {
  menuItems: Array<FriendsNavigationType>
}

const Menu = (props: PropsType) => {
  const menuItem = props.menuItems.map(i => {
		console.log(i)
    return (
      <NavLink
        key={i.id}
        className={(params) => params.isActive ? s.active : s.item}
        to={i.path}
      >
        {i.item}
      </NavLink>
    )
  });

  return (
    <nav className={s.menu}>
      {menuItem}
    </nav>
  );
}

export default Menu;
