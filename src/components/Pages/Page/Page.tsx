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
import Programming from "./Programming/Programming";

type PropsType = {
  store: AppStateType
  dispatch: (action: ActionsType) => void
}

const Page = (props: PropsType) => {
  return (
    <section className={s.page}>
      <Routes>
        <Route path="/" element={(
          <AboutAuthor
            page={props.store.author}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/social-it-incubator" element={(
          <AboutAuthor
            page={props.store.author}
            dispatch={props.dispatch}
          />
        )}/>
				<Route path="/programming" element={(
					<Programming
						page={props.store.news}
						dispatch={props.dispatch}
					/>
				)}/>
        <Route path="/investing" element={(
          <Investing
            page={props.store.news}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/sport" element={(
          <Sport/>
        )}/>
				<Route path="/friends" element={(
					<Friends
						page={props.store.friendsPage}
						dispatch={props.dispatch}
					/>
				)}/>
        <Route path="/publications" element={(
          <Publications
            page={props.store.publicationsPage}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/messages" element={(<Messages/>)}/>
        <Route path="/photo" element={Photo}/>
        {/*<Route path="/*" element={<Error404/>}/>*/}
      </Routes>
    </section>
  )
}

export default Page;
