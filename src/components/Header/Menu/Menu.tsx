import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {MenuItemsType} from "../../../redux/store";

// CSS
const {menu} = styles;

type PropsType = {
  menuItems: Array<MenuItemsType>
}

const Menu = (props: PropsType) => {
  const menuItem = props.menuItems.map(i => {
    return (
      <NavLink
        key={i.id}
        className={styles.item}
        activeClassName={styles.active}
        to={i.path}
      >
        {i.item}
      </NavLink>
    )
  });

  return (
    <nav className={menu}>
      {menuItem}
    </nav>
  );
}

export default Menu;
