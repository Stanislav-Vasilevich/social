import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";

const {main, page, people, dialogs} = styles;

function Friends() {
  // const friends = [
  //   {id: 1, name: 'Даша', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'}
  // ]

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>
        <div className={people}>

          {/* Даша */}
          <Friend
            id={1}
            img="https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg"
            name="Даша"
          />

          {/* Паша */}
          <Friend
            id={2}
            img="https://klike.net/uploads/posts/2018-06/1528369868_15.jpg"
            name="Паша"
          />

          {/* Вова */}
          <Friend
            id={3}
            img="https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg"
            name="Вова"
          />
        </div>

        {/* Диалоги */}
        <div className={dialogs}>
          <Dialogs message="Hello! How are you?" />
          <Dialogs message="Hey! I`m work, I`m find!" />
          <Dialogs message="It`s good))" />
        </div>
      </div>
    </section>
  )
}

export default Friends;