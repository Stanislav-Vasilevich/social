import React from 'react';
import {Routes, Route} from 'react-router-dom';
import s from './Page.module.css';
import News from './News/News';
import AboutAuthor from './AboutAuthor/AboutAuthor';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';
import Publications from './Publications/Publications';
import Messages from './Messages/Messages';
import Photo from './Photo/Photo';
import {ActionsType} from '../../../index';
import {AppStateType} from '../../../redux/redux-store';

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
        <Route path="/news" element={(
          <News
            page={props.store.news}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/friends" element={(
          <Friends
            page={props.store.friendsPage}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/groups" element={(
          <Groups/>
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
