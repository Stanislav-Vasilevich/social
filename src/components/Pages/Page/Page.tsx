import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styles from './Page.module.css';
import News from './News/News';
import AboutAuthor from './AboutAuthor/AboutAuthor';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';
import Publications from './Publications/Publications';
import Messages from './Messages/Messages';
import Photo from './Photo/Photo';
import {ActionsType, PagesType} from '../../../redux/store';

type PropsType = {
  pages: PagesType
  dispatch: (action: ActionsType) => void
}

const Page = (props: PropsType) => {
  return (
    <section className={styles.main}>
      <Routes>
        <Route path="/" element={AboutAuthor}/>
        <Route path="/news" element={News}/>
        <Route path="/friends" element={(
          <Friends
            page={props.pages.page.friends}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/groups" element={Groups}/>
        <Route path="/publications" element={(
          <Publications
            page={props.pages.page.publications}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/messages" element={Messages}/>
        <Route path="/photo" element={Photo}/>
        <Route path="/social-it-incubator" element={AboutAuthor}/>
        {/*<Route path="/*" element={<Error404/>}/>*/}
      </Routes>
    </section>
  )
}

export default Page;
