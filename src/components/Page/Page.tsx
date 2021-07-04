import React from "react";
import styles from "./Page.module.css";
import {Route} from "react-router-dom";
import Publications from "../Publications/Publications";
import Information from "../Information/Information";
import Friends from "./Friends/Friends";
import Photo from "./Photo/Photo";
import Stories from "./Stories/Stories";
import Video from "./Video/Video";
import Else from "./Else/Else";

const {main} = styles;

function Page() {
  return (
    <section className={main}>
      <Route path='/publications' component={Publications}/>
      <Route path='/information' component={Information}/>
      <Route path='/friends' component={Friends}/>
      <Route path='/photo' component={Photo}/>
      <Route path='/stories' component={Stories}/>
      <Route path='/video' component={Video}/>
      <Route path='/else' component={Else}/>
    </section>
  )
}

export default Page;