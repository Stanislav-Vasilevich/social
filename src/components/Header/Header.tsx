import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';
import Menu, {menuItemsType} from "../Menu/Menu";

type PropsType = {
  menuItems: Array<menuItemsType>
}

const Header = (props: PropsType) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <Menu menuItems={props.menuItems}/>
      {/*<nav className="menu">*/}
      {/*  <NavLink className="item" activeClassName="active" to="/publications">Главная</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/friends">Друзья</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/watch">Watch</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/group">Группы</NavLink>*/}
      {/*  <NavLink className="item" activeClassName="active" to="/games">Игры</NavLink>*/}
      {/*</nav>*/}
      <div className="user">Станислав</div>
    </div>
  )
}

export default Header;
