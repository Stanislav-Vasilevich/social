import s from './Investing.module.css';
import React from "react";
import {NewsPageType} from '../../../../redux/news-reducer';
import {ActionsType} from '../../../../index';

type PropsType = {
	page: NewsPageType
	dispatch: (action: ActionsType) => void
}

const Investing = (props: PropsType) => {
	return (
		<div className={s.news}>
			<div className={s.header}>
				<img className={s.image} src={props.page.avatar} alt={props.page.name}/>
				<div className={s.user}>
					<h2 className={s.name}>{props.page.name}</h2>
					<div className={s.date}>{props.page.data}</div>
				</div>
			</div>
			<div className={s.body}>
				<div className={s.title}>{props.page.title}</div>
				<div className={s.text}>{props.page.text}</div>
				<img className={s.photo} src={props.page.photo} alt={props.page.alt}/>
				<div className={s.likes}>
					&#128420; {props.page.likesCount}
				</div>
			</div>
		</div>
	)
}
export default Investing;
