import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {StateType} from "../../redux/state";

// CSS
const {menu} = styles;

type PropsType = {
  state: StateType
}

const Menu = (props: PropsType) => {
  const menuItem = props.state.menu.header.map(i => {
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
    <nav className={menu}>
      {menuItem}
    </nav>
  );
}

export default Menu;
