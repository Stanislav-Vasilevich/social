import React from 'react';
import {ActionsType} from "../../../index";
import {NavLink, Routes, Route} from "react-router-dom";
import s from './Code.module.css';
import {CodePageType} from "../../../redux/code-reducer";
import styles from '../../../App.module.css';
import HTML from "./HTML/HTML";
import CSS from "./CSS/CSS";
import JavaScript from "./JavaScript/JavaScript";
import Skills from "./Skills/Skills";

type PropsType = {
	page: CodePageType
	dispatch: (action: ActionsType) => void
}

const Code = (props: PropsType) => {
	return (
		<section className={`${styles.page} ${s.code}`}>
			<aside className={s.sidebar}>
				<nav className={s.menu}>
					<NavLink
						className={(params) => params.isActive ? s.active : s.menuItem}
						to={'/code/skills'}>{props.page.skills}</NavLink>
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
			</aside>
			<section className={s.content}>
				<h1 className={s.title}>{props.page.text}</h1>
				<div className={s.description}>
					<Routes>
						<Route path={'/html'} element={(<HTML/>)}/>
						<Route path={'/css'} element={(<CSS/>)}/>
						<Route path={'/javascript'} element={(<JavaScript/>)}/>
						<Route path={'/skills'} element={(<Skills/>)}/>
					</Routes>
				</div>
			</section>
		</section>
	)
};

export default Code;
