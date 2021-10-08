import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import Menu from "../Menu/Menu";
import {menuDataType} from "../../index";

type PropsType = {
  menuData: menuDataType
}

const Header = (props: PropsType) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuData={props.menuData}/>
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
