import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";

const {main, page, people, dialogsStyle} = styles;

function Friends() {
  type friendDataType = {
    id: number
    name: string
    img: string
  }

  type dialogsDataType = {
    id: number
    message: string
  }

  const friends: Array<friendDataType> = [
    {id: 1, name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
    {id: 2, name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
    {id: 3, name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
  ]

  const dialogs:Array<dialogsDataType> = [
    {id: 1, message: 'Hello! How are you?'},
    {id: 2, message: 'Hey! I`m work, I`m find!'},
    {id: 3, message: 'It`s good))'}
  ]

  const arrayFriends = friends.map(i => <Friend id={i.id} img={i.img} name={i.name} />)
  const arrayDialogs = dialogs.map(i => <Dialogs id={i.id} message={i.message} />)

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>
        <div className={people}>
          {/* друзья */}
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