import React from 'react';
import s from './Main.module.css';
import {MainPageType} from "../../../../redux/main-reducer";
import {ActionsType} from "../../../../index";

type PropsType = {
	page: MainPageType
	dispatch: (action: ActionsType) => void
}

const Main = (props: PropsType) => {
	return (
		<section className={s.main}>
			<div>{props.page.text}</div>
			<div className={s.content}>
				<h1 className={s.title}>{props.page.title}</h1>
			</div>
		</section>
	);
};

export default Main;
