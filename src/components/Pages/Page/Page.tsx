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

const Page = () => {
  return (
    <section className={styles.main}>
      <Switch>
        <Route exact path="/" component={AboutAuthor}/>
        <Route path="/news" component={News}/>
        <Route path="/friends" component={Friends}/>
        <Route path="/groups" component={Groups}/>
        <Route path="/publications" component={Publications}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/photo" component={Photo}/>
      </Switch>
    </section>
  )
}

export default Page;
