import React from 'react';
import {ActionsType} from "../../../../index";
import {NavLink} from "react-router-dom";
import s from './Code.module.css';
import {CodePageType} from "../../../../redux/code-reducer";
import styles from './../../../../App.module.css';

type PropsType = {
	page: CodePageType
	dispatch: (action: ActionsType) => void
}

const Code = (props: PropsType) => {
	return (
		<section className={`${styles.page} ${s.code}`}>
			<nav className={s.menu}>
				<NavLink className={`${s.menuItem} ${s.menuItemActive}`} to={'/html'}>HTML</NavLink>
				<NavLink className={s.menuItem} to={'/css'}>CSS</NavLink>
				<NavLink className={s.menuItem} to={'/javascript'}>JavaScript</NavLink>
			</nav>
			{/* сайт-бар */}
			<aside>
				<div>Краткая информация</div>
				<div>Фото</div>
				<div>Друзья</div>
				<div>Подвал сайта</div>
			</aside>
		</section>
	);
};

export default Code;
