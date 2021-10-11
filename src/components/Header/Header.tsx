import React from 'react';
import s from './Header.module.css';
import logo from '../../image/logo.png';
import Menu from "../Menu/Menu";
import {StateType} from '../../redux/state';

type PropsType = {
  state: StateType
}

const Header = (props: PropsType) => {
  console.log(props)
  const header = props.state.menu.header;
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuItems={header}/>
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
