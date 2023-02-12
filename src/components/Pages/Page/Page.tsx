import React from 'react';
import {Routes, Route} from 'react-router-dom';
import s from './Page.module.css';
import AboutAuthor from './AboutAuthor/AboutAuthor';
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
import Community from "./Community/Community";
import News from "./News/News";

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
						page={props.store.mainPage}
						dispatch={props.dispatch}
					/>
				)}/>

				<Route path="/publications/*" element={(
					<div>
						{/*<News*/}
						{/*	page={props.store}*/}
						{/*	dispatch={props.dispatch}*/}
						{/*/>*/}
						{/*<Publications*/}
						{/*	page={props.store.publicationsPage}*/}
						{/*	dispatch={props.dispatch}*/}
						{/*/>*/}
					</div>
				)}/>

				<Route path="/motivation" element={(
					<Motivation
						page={props.store.motivationPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/sport" element={(
					<Sport
						page={props.store.sportPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/code" element={(
					<Code
						page={props.store.codePage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/investing" element={(
					<Investing
						page={props.store.investingPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path="/community" element={(
					<Community
						page={props.store.communityPage}
						dispatch={props.dispatch}
					/>
				)}/>
				<Route path={'/author'} element={(
					<AboutAuthor
						page={props.store.authorPage}
						dispatch={props.dispatch}
					/>
				)}
				/>
				{/*<Route path="/messages" element={(<Messages/>)}/>*/}
				{/*<Route path="/photo" element={Photo}/>*/}
				<Route path="/*" element={<Error404/>}/>
			</Routes>
		</section>
	)
}

export default Page;
