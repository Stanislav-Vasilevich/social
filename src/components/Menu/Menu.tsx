import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import {menuDataType} from "../../index";

// CSS
const {menu, item, active} = styles;

export type menuItemsType = {
  id: number
  item: string
  path: string
}

type PropsType = {
  menuData: menuDataType
}

const Menu = (props: PropsType) => {
  // const itemMenu = props.menuItems.map(i => {
  //   return <NavLink key={i.id} className={item} activeClassName={active} to={i.path}>{i.item}</NavLink>
  // });

  console.log(props)

  return (
    <nav className={menu}>
      {/*{itemMenu}*/}
    </nav>
  );
}

export default Menu;
