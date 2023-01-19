import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {CommunityPageNavigationType} from '../../../redux/сommunity-reducer';

type PropsType = {
  menuItems: Array<CommunityPageNavigationType>
}

const Menu = (props: PropsType) => {
  const menuItem = props.menuItems.map(i => {
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
