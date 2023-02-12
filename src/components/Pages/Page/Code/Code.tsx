import React from 'react';
import {ActionsType} from "../../../../index";
import {NavLink} from "react-router-dom";
import s from './Code.module.css';
import {CodePageType} from "../../../../redux/code-reducer";
import styles from "../Publications/Publications.module.css";

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
			{/* сайт-бар */}
			<aside className={styles.sideBar}>
				<div className={styles.info}>Краткая информация</div>
				<div className={styles.photo}>Фото</div>
				<div className={styles.friends}>Друзья</div>
				<div className={styles.footer}>Подвал сайта</div>
			</aside>
		</div>
	);
};

export default Code;
