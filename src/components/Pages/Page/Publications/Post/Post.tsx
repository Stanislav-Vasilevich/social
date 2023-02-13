import React from 'react';
import s from './Post.module.css';
import {ActionsType} from '../../../../../index';
import {NavLink, Routes} from "react-router-dom";

type PostPropsType = {
	id: string
	title: string
	description: string
	photo: string
	alt: string
	text: string
	name: string
	date: string
	likesCount: number
	commentStatus: boolean
	direction: string
	dispatch: (action: ActionsType) => void
}

const Post = (props: PostPropsType) => {
	return (
		<article className={s.post}>
			<h1 className={s.title}>{props.title}</h1>
			<div className={s.description}>{props.description}</div>
			<div className={s.photo}>
				<img
					className={s.img}
					src={props.photo}
					alt={props.alt}
				/>
			</div>
			<div className={s.text}>{props.text}</div>
			<div className={s.name}>{props.name}</div>
			<div className={s.date}>{props.date}</div>
			<div className={s.like}>&#128077; {props.likesCount}</div>
			<NavLink className={s.comment} to={'./publications'}>Комментарии</NavLink>
		</article>
	)
}

export default Post;
