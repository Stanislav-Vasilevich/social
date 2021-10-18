import React from 'react';
import styles from './Navigation.module.css';
import {Route} from 'react-router-dom';
import Friends from './Friends/Friends';
import Photo from './Photo/Photo';
import Stories from './Stories/Stories';
import Video from './Video/Video';
import Else from './Else/Else';
import Publications from './Publications/Publications';
import Information from './Information/Information';
import {StoreType} from '../../../redux/state';

const {main} = styles;

type PropsType = {
  store: StoreType
}

const Navigation: React.FC<PropsType> = (props: PropsType) => {
  return (
    <section className={main}>
      <Route path="/publications" component={Publications}/>
      <Route path="/information" component={Information}/>
      <Route path="/friends">
        <Friends state={props.store.getState()}
                 changeDialogsMessage={props.store.changeDialogsMessage}
                 addMessage={props.store.addMessage}
                 addMessageByEnter={props.store.addMessageByEnter}/>
      </Route>
      <Route path="/photo" component={Photo}/>
      <Route path="/stories" component={Stories}/>
      <Route path="/video" component={Video}/>
      <Route path="/else" component={Else}/>
    </section>
  )
}

export default Navigation;
