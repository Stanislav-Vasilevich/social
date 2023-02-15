import React from 'react';
import {ActionsType} from "../../../index";
import {NavLink, Routes, Route} from "react-router-dom";
import s from './Code.module.css';
import {CodePageType} from "../../../redux/code-reducer";
import styles from '../../../App.module.css';
import HTML from "./HTML/HTML";
import CSS from "./CSS/CSS";
import JavaScript from "./JavaScript/JavaScript";

type PropsType = {
	page: CodePageType
	dispatch: (action: ActionsType) => void
}

const Code = (props: PropsType) => {
	return (
		<section className={`${styles.page} ${styles.container} ${s.code}`}>
			<nav className={s.menu}>
				<NavLink
					className={(params) => params.isActive ? s.active : s.menuItem}
					to={'/code/html'}>HTML</NavLink>
				<NavLink
					className={(params) => params.isActive ? s.active : s.menuItem}
					to={'/code/css'}>CSS</NavLink>
				<NavLink
					className={(params) => params.isActive ? s.active : s.menuItem}
					to={'/code/javascript'}>JavaScript</NavLink>
			</nav>
			<Routes>
				<Route path={'/html'} element={(<HTML/>)}/>
				<Route path={'/css'} element={(<CSS/>)}/>
				<Route path={'/javascript'} element={(<JavaScript/>)}/>
			</Routes>
		</section>
	)
};

export default Code;
