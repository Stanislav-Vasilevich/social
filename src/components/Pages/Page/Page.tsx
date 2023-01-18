import React from 'react';
import {Routes, Route} from 'react-router-dom';
import s from './Page.module.css';
import AboutAuthor from './AboutAuthor/AboutAuthor';
import Friends from './Friends/Friends';
import Publications from './Publications/Publications';
import Messages from './Messages/Messages';
import Photo from './Photo/Photo';
import {ActionsType} from '../../../index';
import {AppStateType} from '../../../redux/redux-store';
import Investing from "./Investing/Investing";
import Sport from "./Sport/Sport";
import Code from "./Code/Code";
import Error404 from "./Error404/Error404";
import Main from "./Main/Main";
import Motivation from "./Motivation/Motivation";

type PropsType = {
	store: AppStateType
	dispatch: (action: ActionsType) => void
}

const Page = (props: PropsType) => {
	return (
		<section className={s.page}>
			<Routes>
				<Route path="/" element={(
					<Main
						page={props.store.main}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/motivation" element={(
					<Motivation
						page={props.store.motivation}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/sport" element={(
					<Sport
						page={props.store.sport}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/code" element={(
					<Code
						page={props.store.code}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/investing" element={(
					<Investing
						page={props.store.investing}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/friends" element={(
					<Friends
						page={props.store.friendsPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path={'/author'} element={(
					<AboutAuthor
						page={props.store.author}
						dispatch={props.dispatch}
					/>
				)}
				/>
				{/* вынести отсюда */}
				<Route path="/publications" element={(
					<Publications
						page={props.store.publicationsPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/messages" element={(<Messages/>)}/>
				<Route path="/photo" element={Photo}/>
				<Route path="/*" element={<Error404/>}/>
			</Routes>
		</section>
	)
}

export default Page;
