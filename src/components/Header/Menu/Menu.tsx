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
		console.log('i: ', i.path);

		if (i.path === '/') {
			return (
				<NavLink
					key={i.id}
					className={s.itemHome}
					to={i.path}
				>
					<img className={s.itemHome__img} src={imageHome} alt="home"/>
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
