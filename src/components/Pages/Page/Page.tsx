import React from 'react';
import styles from './Page.module.css';
import {Route} from 'react-router-dom';
import Friends from './Friends/Friends';
import Photo from './Photo/Photo';
import Stories from './Stories/Stories';
import Video from './Video/Video';
import WriteToMe from './WriteToMe/WriteToMe';
import Publications from './Publications/Publications';
import Information from './Information/Information';
import store, {StoreType} from '../../../redux/store';

const {main} = styles;

type PropsType = {
  store: StoreType
}

const Page: React.FC<PropsType> = (props: PropsType) => {
  return (
    <section className={main}>
      <Route path="/publications" component={Publications}/>
      <Route path="/information" component={Information}/>
      <Route path="/write-to-me" component={WriteToMe}/>
      <Route path="/friends">
        <Friends
          state={props.store.getState()}
          dispatch={props.store.dispatch.bind(store)}
        />
      </Route>
    </section>
  )
}

export default Page;
