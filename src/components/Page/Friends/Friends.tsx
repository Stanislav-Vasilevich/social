import React, {createRef} from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";
import {GlobalStateType} from "../../../redux/state";

const {main, page, people, dialogsStyle, writeSend, textArea, button} = styles;

type PropsType = {
  globalState: GlobalStateType
}

const Friends: React.FC<PropsType> = ({globalState}) => {
  const textAreaRef = createRef<HTMLTextAreaElement>();

  // массив друзей => друг
  const arrayFriends = globalState.friendsPage.friends.map(i => {
    return <Friend key={i.id} id={i.id} name={i.name} img={i.img}/>
  });

  // массив диалогов => диалог
  const arrayDialogs = globalState.friendsPage.dialogs.map(i => {
    return <Dialogs key={i.id} id={i.id} message={i.message}/>
  });

  // добавляем сообщение в диалог по кнопке
  const addMessageHandler = () => {
    // console.log(textAreaRef.current?.value);
    if(textAreaRef.current) {
      // addMessage(textAreaRef.current?.value);
    }
  }

  // добавляем сообщение в диалог по нажатию Enter
  const addMessageHandlerByEnter = () => {
    if(textAreaRef.current) {
      // addMessage(textAreaRef.current?.value);
    }
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
            <textarea className={textArea} ref={textAreaRef} onKeyPress={addMessageHandlerByEnter}></textarea>
            <button className={button} onClick={addMessageHandler}>Отправить</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Friends;
