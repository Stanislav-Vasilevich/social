import React from "react";
import styles from "./Dialogs.module.css";

const {main, item} = styles;

type DialogsPropsType = {
  id: number
  message: string
}

const Dialogs: React.FC<DialogsPropsType> = ({message}) => {
  return (
    <section className={main}>
      <div className={item}>{message}</div>
    </section>
  )
}

export default Dialogs;