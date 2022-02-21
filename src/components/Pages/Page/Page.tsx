import React from 'react';
import {Switch} from "react-router-dom";
import styles from './Page.module.css';
import {Route} from 'react-router-dom';
import Home from "./Home/Home";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import Portfolio from "./Portfolio/Portfolio";

const Page = () => {
  return (
    <section className={styles.main}>
      <Switch>
        <Route exact path="/" component={AboutAuthor}/>
        <Route path="/about-author" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </section>
  )
}

export default Page;
