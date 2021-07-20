import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";

const {main, page, people, dialogsStyle} = styles;

const Friends: React.FC<any> = ({globalState}) => {
  const arrayFriends = globalState.friendsPage.friends.map(i => <Friend id={i.id} img={i.img} name={i.name} />);
  const arrayDialogs = globalState.friendsPage.dialogs.map(i => <Dialogs id={i.id} message={i.message} />);

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
