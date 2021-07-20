import React from "react";
import styles from "./Dialogs.module.css";

const {main, item} = styles;

const Dialogs: React.FC<any> = ({globalState}) => {
  return (
    <section className={main}>
      <div className={item}>{globalState.friendsPage.dialogs.message}</div>
    </section>
  )
}

export default Dialogs;
