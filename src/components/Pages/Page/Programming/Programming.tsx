import React from 'react';
import {NewsPageType} from "../../../../redux/news-reducer";
import {ActionsType} from "../../../../index";
import {NavLink} from "react-router-dom";
import s from './Programming.module.css';

type PropsType = {
	page: NewsPageType
	dispatch: (action: ActionsType) => void
}

const Programming = (props: PropsType) => {
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

export default Programming;
