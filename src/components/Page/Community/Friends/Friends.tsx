import React from 'react';
import styles from './Friends.module.css';
import s from "../Community.module.css";

type PropsType = {}

const Friends = (props: PropsType) => {
  return (
    <section className={`${styles.page} ${s.friends}`}>
      Друзья
    </section>
  )
}

export default Friends;
