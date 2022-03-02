import React from 'react';
import {Switch} from "react-router-dom";
import styles from './Page.module.css';
import {Route} from 'react-router-dom';
import News from "./News/News";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import Friends from "./Friends/Friends";
import Groups from "./Groups/Groups";
import Publications from "./Publications/Publications";
import Messages from "./Messages/Messages";
import Photo from "./Photo/Photo";
import {ActionsType, PagesType, UserType} from "../../../redux/store";

type PropsType = {
  pages: PagesType
  dispatch: (action: ActionsType) => void
}

const Page = (props: PropsType) => {
  return (
    <section className={styles.main}>
      <Switch>
        <Route exact path="/" component={AboutAuthor}/>
        <Route path="/news" component={News}/>
        <Route path="/friends">
          <Friends
            page={props.pages.page.friends}
            dispatch={props.dispatch}
          />
        </Route>
        <Route path="/groups" component={Groups}/>
        <Route path="/publications">
          <Publications
            page={props.pages.page.publications}
            dispatch={props.dispatch}
          />
        </Route>
        <Route path="/messages" component={Messages}/>
        <Route path="/photo" component={Photo}/>
        <Route path="/social-it-incubator" component={AboutAuthor}/>
      </Switch>
    </section>
  )
}

export default Page;
