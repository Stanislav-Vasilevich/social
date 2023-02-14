import React from 'react';
import s from './Community.module.css';
import Friends from './Friends/Friends';
import Navigation from '../../Navigation/Navigation';
import {
	CommunityPageType
} from '../../../../redux/сommunity-reducer';
import {ActionsType} from '../../../../index';
import styles from './../../../../App.module.css';
import {Routes, Route} from "react-router-dom";
import Forum from "./Forum/Forum";
import Support from "./Support/Support";

type PropsType = {
  page: CommunityPageType
  dispatch: (action: ActionsType) => void
}

const Community = (props: PropsType) => {
  return (
    <section className={`${styles.page} ${s.community}`}>
      {/* навигация */}
      <Navigation menuItems={props.page.navigation}/>

			<Routes>
				<Route path={'/forum'} element={(<Forum/>)}/>
				<Route path={'/friends'} element={(<Friends/>)}/>
				<Route path={'/support'} element={(<Support/>)}/>
			</Routes>
    </section>
  )
}

export default Community;
