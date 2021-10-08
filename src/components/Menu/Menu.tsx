import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {menuItemsType} from "../../index";

// CSS
const {menu} = styles;

type PropsType = {
  menuItems: Array<menuItemsType>
}

const Menu = (props: PropsType) => {
  const itemMenu = props.menuItems.map(i => {
    return <NavLink key={i.id} className={styles.item} activeClassName={styles.active} to={i.path}>{i.item}</NavLink>
  });

  return (
    <nav className={menu}>
      {itemMenu}
    </nav>
  );
}

export default Menu;
