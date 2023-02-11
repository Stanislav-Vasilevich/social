import React from 'react';
import s from './Sport.module.css';
import {ActionsType} from "../../../../index";
import {SportPageType} from "../../../../redux/sport-reducer";

type PropsType = {
	page: SportPageType
	dispatch: (action: ActionsType) => void
}

const Sport = (props: PropsType) => {
  return (
    <section className={s.main}>
      <div>{props.page.text}</div>
    </section>
  )
}

export default Sport;
