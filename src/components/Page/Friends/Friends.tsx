import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";
import {addMessageByEnter, GlobalStateType} from "../../../redux/state";

const {main, page, people, dialogsStyle, writeSend, textArea, button} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (massage: string) => void
  addMessageByEnter: () => void
}

const Friends: React.FC<PropsType> = ({state, changeDialogsMessage, addMessage, addMessageByEnter}) => {

  // массив друзей => друг
  const arrayFriends = state.friendsPage.friends.map(i => {
    return <Friend key={i.id} id={i.id} name={i.name} img={i.img}/>
  });

  // массив диалогов => диалог
  const arrayDialogs = state.friendsPage.dialogs.map(i => {
    return <Dialogs key={i.id} id={i.id} message={i.message}/>
  });

  // обновляем значение change у textarea
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeDialogsMessage(e.currentTarget.value);
  }

  // добавляем сообщение в диалог по нажатию Enter
  const addMessageHandlerByEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter') {
      addMessageByEnter();
    }
  }

  // добавляем сообщение в диалог по нажатию на кнопку
  const addMessageHandler = () => {
    addMessage();
  }

  return (
    <section className={main}>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>

        {/* друзья */}
        <div className={people}>
          {arrayFriends}
        </div>

        {/* диалоги */}
        <div className={dialogsStyle}>
          {arrayDialogs}

          {/* написать и отправить сообщение */}
          <div className={writeSend}>
            <textarea className={textArea} onChange={onChangeHandler} onKeyPress={addMessageHandlerByEnter} value={state.friendsPage.valueMessage}></textarea>
            <button className={button} onClick={addMessageHandler}>Отправить</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Friends;
