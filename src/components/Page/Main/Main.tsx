import React from 'react';
import s from './Main.module.css';
import {MainPageType} from "../../../redux/main-reducer";
import {ActionsType} from "../../../index";
import styles from '../../../App.module.css';

type PropsType = {
	page: MainPageType
	dispatch: (action: ActionsType) => void
}

const Main = (props: PropsType) => {
	return (
		<div className={`${styles.page} ${styles.container} ${s.main}`}>
			<div>{props.page.text}</div>
			<div className={s.content}>
				<h1 className={s.title}>{props.page.title}</h1>
			</div>
		</div>
	);
};

export default Main;
