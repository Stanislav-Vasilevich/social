import React from 'react';
import s from './Main.module.css';
import {MainPageType} from "../../../../redux/main-reducer";
import {ActionsType} from "../../../../index";

type PropsType = {
	page: MainPageType
	dispatch: (action: ActionsType) => void
}

const Main = (props: PropsType) => {
	const AddPost = () => {
		alert('add post');
	}
	return (
		<section className={s.main}>
			<div>{props.page.text}</div>
			<div className={s.content}>
				<h1 className={s.title}>{props.page.title}</h1>
			</div>
			<button onClick={() => AddPost()}>Add</button>
		</section>
	);
};

export default Main;
