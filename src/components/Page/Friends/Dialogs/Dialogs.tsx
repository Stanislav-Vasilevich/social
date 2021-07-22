import React from "react";
import styles from "./Dialogs.module.css";

const {main, item} = styles;

type PropsType = {
  id: string
  message: string
}

const Dialogs: React.FC<PropsType> = ({id, message}) => {
  return (
    <section className={main}>
      <div className={item}>{message}</div>
    </section>
  )
}

export default Dialogs;
