import React from 'react';
import {ActionsType} from "../../../../index";
import {NavLink} from "react-router-dom";
import s from './Code.module.css';
import {CodePageType} from "../../../../redux/code-reducer";

type PropsType = {
	page: CodePageType
	dispatch: (action: ActionsType) => void
}

const Code = (props: PropsType) => {
	return (
		<div className={s.content}>
			<nav className={s.menu}>
				<NavLink className={`${s.menuItem} ${s.menuItemActive}`} to={'/html'}>HTML</NavLink>
				<NavLink className={s.menuItem} to={'/css'}>CSS</NavLink>
				<NavLink className={s.menuItem} to={'/javascript'}>JavaScript</NavLink>
			</nav>
		</div>
	);
};

export default Code;
