import React from "react";
import styles from "./Dialogs.module.css";
import {stateType} from "../../../../redux/state";

const {main, item} = styles;

const Dialogs = (props: stateType) => {
  return (
    <section className={main}>
      <div className={item}>{props.message}</div>
    </section>
  )
}

export default Dialogs;