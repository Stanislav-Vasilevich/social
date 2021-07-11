import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";
import {stateType} from "../../../redux/state";

const {main, page, people, dialogsStyle} = styles;

function Friends(props: stateType) {
  console.log(props.friendsPage)
  debugger

  const arrayFriends = props.globalState.friends.map(i => <Friend id={i.id} img={i.img} name={i.name} />);
  const arrayDialogs = props.globalState.dialogs.map(i => <Dialogs id={i.id} message={i.message} />);

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>

        {/* друзья */}
        <div className={people}>
          {/*{arrayFriends}*/}
        </div>

        {/* Диалоги */}
        <div className={dialogsStyle}>
          {/*{arrayDialogs}*/}
        </div>

      </div>
    </section>
  )
}

export default Friends;