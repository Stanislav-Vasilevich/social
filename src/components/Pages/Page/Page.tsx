import React from 'react';
import styles from './Page.module.css';
import {Route} from 'react-router-dom';
import {PagesType} from '../../../redux/store';
import Home from "./Home/Home";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import Portfolio from "./Portfolio/Portfolio";

const {main} = styles;

type PropsType = {
  store: PagesType
}

const Page: React.FC<PropsType> = (props: PropsType) => {
  console.log(props.store);
  return (
    <section className={main}>
      <Route path="/" component={Home}/>
      <Route path="/about-author" component={AboutAuthor}/>
      <Route path="/portfolio" component={Portfolio}/>
    </section>
  )
}

export default Page;
