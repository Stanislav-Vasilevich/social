import React from 'react';
import s from './Publications.module.css';
import {PublicationsPageType} from '../../../../redux/publications-reducer';
import {ActionsType} from '../../../../index';
import Post from "./Post/Post";


type PropsType = {
  page: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

const Publications = (props: PropsType) => {
	const showPosts = props.page.posts.map(p => {
		return (
			<Post
				key={p.id}
				id={p.id}
				title={p.title}
				description={p.description}
				photo={p.photo}
				alt={p.alt}
				text={p.text}
				name={p.name}
				date={p.date}
				likesCount={p.likesCount}
				commentStatus={p.commentStatus}
				direction={p.direction}
				dispatch={props.dispatch}
			/>
		)
	});

  return (
    <section className={s.publications}>
			{showPosts}
    </section>
  )
}

export default Publications;
