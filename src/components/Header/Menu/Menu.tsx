import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {CommunityPageNavigationType} from '../../../redux/сommunity-reducer';
import imageHome from './../../../image/home.webp';

type PropsType = {
	menuItems: Array<CommunityPageNavigationType>
}

const Menu = (props: PropsType) => {
	const menuItem = props.menuItems.map(i => {
		if (i.path === '/') {
			return (
				<NavLink
					key={i.id}
					className={(params) => params.isActive ? s.itemHome_active : s.itemHome}
					to={i.path}
				>
					<span className={s.itemHome__img}></span>
				</NavLink>
			)
		}

		return (
			<NavLink
				key={i.id}
				className={(params) => params.isActive ? s.active : s.item}
				to={i.path}
			>
				{i.item}
			</NavLink>
		)
	});

	return (
		<nav className={s.menu}>
			{menuItem}
		</nav>
	);
}

export default Menu;
