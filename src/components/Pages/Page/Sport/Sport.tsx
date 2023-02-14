import React from 'react';
import s from './Sport.module.css';
import {ActionsType} from "../../../../index";
import {SportPageType} from "../../../../redux/sport-reducer";
import styles from './../../../../App.module.css';

type PropsType = {
	page: SportPageType
	dispatch: (action: ActionsType) => void
}

const Sport = (props: PropsType) => {
  return (
    <section className={`${styles.page} ${s.sport}`}>
      <div>{props.page.text}</div>
    </section>
  )
}

export default Sport;
