import React from 'react';
import {ActionsType} from "../../../../index";
import {NewsPageType} from "../../../../redux/news-reducer";
import s from './News.module.css';
import {Routes, Route} from "react-router-dom";
import Publications from "../Publications/Publications";
import {AppStateType} from "../../../../redux/redux-store";

type PropsType = {
	page: AppStateType
	dispatch: (action: ActionsType) => void
}

const News = (props: PropsType) => {
	return (
		<section>
			<div>
				<h1>Здесь я буду выкладывать свои новости по поездкам, технологиям и вобще по каждому направлению и новым курсам</h1>
				<img className={s.photo} src={props.page.newsPage.photo}/>
				<div>{props.page.newsPage.title}</div>
				<div>{props.page.newsPage.text}</div>
				<div>{props.page.newsPage.alt}</div>
				<div className={s.like}>&#128077; {props.page.newsPage.likesCount}</div>
				<div>{props.page.newsPage.name}</div>
				<div>{props.page.newsPage.data}</div>
			</div>

			<Routes>
				<Route path="/publications" element={(
					<Publications
						page={props.page.publicationsPage}
						dispatch={props.dispatch}
					/>
				)}/>
			</Routes>
		</section>
	);
};

export default News;
