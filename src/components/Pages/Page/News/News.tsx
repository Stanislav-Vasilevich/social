import React from 'react';
import {ActionsType} from "../../../../index";
import s from './News.module.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Publications from "../Publications/Publications";
import {AppStateType} from "../../../../redux/redux-store";
import styles from './../../../../App.module.css';

type PropsType = {
	page: AppStateType
	dispatch: (action: ActionsType) => void
}

const News = (props: PropsType) => {
	return (
		<section className={s.news}>
			{/*<Publications*/}
			{/*	page={props.page.publicationsPage}*/}
			{/*	dispatch={props.dispatch}*/}
			{/*/>*/}
		</section>
	);
};

export default News;
