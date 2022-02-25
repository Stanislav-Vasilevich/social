import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Friends.module.css';
import {FriendDataType, FriendsPageType} from '../../../../redux/store';
import Friend from "./Friend/Friend";
import Dialogs from "./Dialogs/Dialogs";

// type PropsType = {
//   state: StateType
//   dispatch: (action: ActionsType) => void
// }

type PropsType = {
  page: FriendsPageType
}

const Friends = (props: PropsType) => {
  // массив друзей => друг
  const arrayFriends = props.page.persons.map(i => {
    return <Friend key={i.id} id={i.id} name={i.name} img={i.img}/>
  });

  // массив диалогов => диалог
  const arrayDialogs = props.page.dialogs.map(i => {
    return <Dialogs key={i.id} id={i.id} message={i.message}/>
  });

  // обновляем значение change у textarea
  // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   props.dispatch(changeTextAC(e.currentTarget.value));
  // }

  // добавляем сообщение в диалог по нажатию на кнопку
  const addMessageHandler = () => {
    // props.dispatch(addMessageAC());
  }

  // добавляем сообщение в диалог по нажатию Enter
  const addMessageHandlerByEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      // props.dispatch(addMessageByEnterAC());
    }
  }

  return (
    <section>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={styles.page}>

        {/* друзья */}
        <div>
          {arrayFriends}
        </div>

        {/* диалоги */}
        <div className={styles.dialogsStyle}>
          {arrayDialogs}

          {/* написать и отправить сообщение */}
          <div className={styles.writeSend}>
            <textarea
              className={styles.textArea}
              // onChange={onChangeHandler}
              // onKeyPress={addMessageHandlerByEnter}
              // value={props.state.friendsPage.valueMessage}
            >
            </textarea>
            <button className={styles.button} onClick={addMessageHandler}>Отправить</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Friends;
