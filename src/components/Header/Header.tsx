import React from 'react';
import s from './Header.module.css';
import logo from '../../image/logo.png';
import Menu from "./Menu/Menu";
import {AppStateType} from '../../redux/redux-store';

type PropsType = {
  store: AppStateType
}

const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuItems={props.store.header.menu}/>
      <div className={s.header__user}>
				<img className={s.header__avatar} src={props.store.header.user.avatar} alt=""/>
				{props.store.header.user.name}
			</div>
    </header>
  )
}

export default Header;
