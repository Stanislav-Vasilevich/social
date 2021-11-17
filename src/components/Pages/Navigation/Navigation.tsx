import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {MenuItemsType} from "./../../../redux/store";

// CSS
const {navigation} = styles;

type PropsType = {
  menuItems: Array<MenuItemsType>
}

const Navigation = (props: PropsType) => {
  const menuItem = props.menuItems.map(i => {
    return (
      <NavLink
        key={i.id}
        className={styles.item}
        activeClassName={styles.active}
        to={i.path}>{i.item}
      </NavLink>
    )
  });

  return (
    <nav className={navigation}>
      {menuItem}
    </nav>
  );
}

export default Navigation;
