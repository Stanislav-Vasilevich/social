import React from 'react';
import styles from './Dialogs.module.css';

const {main, item} = styles;

type PropsType = {
  id: string
  message: string
}

const Dialogs = (props: PropsType) => {
  return (
    <section className={main}>
      <div className={item}>{props.message}</div>
    </section>
  )
}

export default Dialogs;
