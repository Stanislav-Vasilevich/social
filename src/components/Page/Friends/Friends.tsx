import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";
import {GlobalStateType} from "../../../redux/state";

const {main, page, people, dialogsStyle} = styles;

type PropsType = {
  globalState: GlobalStateType
}

const Friends: React.FC<PropsType> = ({globalState}) => {
  const arrayFriends = globalState.friendsPage.friends.map(i => <Friend id={i.id} name={i.name} img={i.img}/>);
  const arrayDialogs = globalState.friendsPage.dialogs.map(i => <Dialogs id={i.id} message={i.message}/>);

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>

        {/* друзья */}
        <div className={people}>
          {arrayFriends}
        </div>

        {/* Диалоги */}
        <div className={dialogsStyle}>
          {arrayDialogs}
        </div>

      </div>
    </section>
  )
}

export default Friends;
