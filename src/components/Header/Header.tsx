import React from 'react';
import s from './Header.module.css';
import logo from '../../image/logo.png';
import Menu from "./Menu/Menu";
import {AppStateType} from '../../redux/redux-store';
import User from "./User/User";

type PropsType = {
  store: AppStateType
}

const Header = (props: PropsType) => {
	console.log('props: ', props)
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuItems={props.store.header.menu}/>
      <div className={s.header__user}>
				<User name={props.store.header.user.name} avatar={props.store.header.user.avatar}	/>
			</div>
    </header>
  )
}

export default Header;
