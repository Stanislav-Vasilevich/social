import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";

const {main, page, people, dialogs} = styles;

function Friends() {
  type friendDataType = {
    id: number
    name: string
    img: string
  }

  const friendsData: Array<friendDataType> = [
    {id: 1, name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
    {id: 2, name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
    {id: 3, name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
  ]

  const dialogsData = [
    {id: 1, message: "Hello! How are you?"},
    {id: 2, message: "Hey! I`m work, I`m find!"},
    {id: 3, message: "It`s good))"}
  ]

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>
        <div className={people}>

          {/* Даша */}
          <Friend
            id={friendsData[0].id}
            img={friendsData[0].img}
            name={friendsData[0].name}
          />

          {/* Паша */}
          <Friend
            id={friendsData[1].id}
            img={friendsData[1].img}
            name={friendsData[1].name}
          />

          {/* Вова */}
          <Friend
            id={friendsData[2].id}
            img={friendsData[2].img}
            name={friendsData[2].name}
          />
        </div>

        {/* Диалоги */}
        <div className={dialogs}>
          <Dialogs
            id={dialogsData[0].id}
            message={dialogsData[0].message}
          />
          <Dialogs
            id={dialogsData[1].id}
            message={dialogsData[1].message}
          />
          <Dialogs
            id={dialogsData[2].id}
            message={dialogsData[2].message}
          />
        </div>
      </div>
    </section>
  )
}

export default Friends;