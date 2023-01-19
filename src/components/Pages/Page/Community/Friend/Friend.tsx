import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Friend.module.css';

const {main, friend, active} = styles;

type PropsType = {
  id: string
  name: string
  img: string
}

const Friend = (props: PropsType) => {
  return (
    <section className={main}>
      <NavLink
        className={friend}
        to={`/friends/${props.id}`}
      >
        <img src={props.img} alt={props.name}/>
        <h2>{props.name}</h2>
      </NavLink>
    </section>
  )
}

export default Friend;
