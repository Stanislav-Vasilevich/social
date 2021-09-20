import React from 'react';
import styles from './Page.module.css';
import {Route} from 'react-router-dom';
import Friends from './Friends/Friends';
import Photo from './Photo/Photo';
import Stories from './Stories/Stories';
import Video from './Video/Video';
import Else from './Else/Else';
import Publications from './Publications/Publications';
import Information from './Information/Information';
import {GlobalStateType} from '../../redux/state';

const {main} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (message: string) => void
  addMessageByEnter: () => void
}

const Page: React.FC<PropsType> = ({state, changeDialogsMessage, addMessage, addMessageByEnter}) => {
  return (
    <section className={main}>
      <Route path="/publications" component={Publications}/>
      <Route path="/information" component={Information}/>
      <Route path="/friends">
        <Friends state={state} changeDialogsMessage={changeDialogsMessage} addMessage={addMessage}
                 addMessageByEnter={addMessageByEnter}/>
      </Route>
      <Route path="/photo" component={Photo}/>
      <Route path="/stories" component={Stories}/>
      <Route path="/video" component={Video}/>
      <Route path="/else" component={Else}/>
    </section>
  )
}

export default Page;
