import React from 'react';
import s from './Publications.module.css';
import {AddComment} from './AddComment/AddComment';
import {PublicationsPageType} from '../../../../redux/publications-reducer';
import {ActionsType} from '../../../../index';
import {NavLink, Route, Routes} from "react-router-dom";
import Post from "./AddComment/Posts/Post/Post";
import styles from "../../../../App.module.css";

type PropsType = {
  page: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

const Publications = (props: PropsType) => {
	// const showPosts = props.data.map(p => {
	// 	return (
	// 		<Post
	// 			key={p.id}
	// 			id={p.id}
	// 			title={p.title}
	// 			text={p.text}
	// 			avatar={p.avatar}
	// 			likesCount={p.likesCount}
	// 			dispatch={props.dispatch}
	// 		/>
	// 	)
	// });

  return (
		<div></div>
    // <section className={s.publications}>
		// 	<blockquote className={styles.blockquote}>Здесь я буду выкладывать свои новости по поездкам, технологиям и вобще
		// 		по каждому направлению и новым
		// 		курсам
		// 	</blockquote>
		//
		// 	<div className={s.post}>
		// 		<h1 className={s.title}>{props.page.newsPage.title}</h1>
		// 		<div className={s.description}>{props.page.newsPage.description}</div>
		// 		<div className={s.photo}>
		// 			<img
		// 				className={s.img}
		// 				src={props.page.newsPage.photo}
		// 				alt={props.page.newsPage.alt}
		// 			/>
		// 		</div>
		// 		<div className={s.text}>{props.page.newsPage.text}</div>
		// 		<div className={s.name}>{props.page.newsPage.name}</div>
		// 		<div className={s.date}>{props.page.newsPage.data}</div>
		// 		<div className={s.like}>&#128077; {props.page.newsPage.likesCount}</div>
		// 		<NavLink className={s.comment} to={'./publications'}>Комментарии</NavLink>
		// 		<Routes>
		// 			<Route path="/publications" element={(
		// 				<Post
		// 					page={props.page.publicationsPage}
		// 					dispatch={props.dispatch}
		// 				/>
		// 			)}/>
		// 		</Routes>
		// 	</div>
    //    {/*главный контент */}
    //   <AddComment
    //     mainContent={props.page}
    //     dispatch={props.dispatch}
    //   />
    // </section>
  )
}

export default Publications;
