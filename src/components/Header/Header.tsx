import React from 'react';
import s from './Header.module.css';
import logo from '../../image/logo.png';
import Menu from "./Menu/Menu";
import {StoreType} from "../../redux/store";

type PropsType = {
  store: StoreType
}

const Header = (props: PropsType) => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuItems={props.store.header.menu}/>
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
