import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';
import Dialogs from './Dialogs/Dialogs';
import {ActionsType, addMessageAC, addMessageByEnterAC, changeTextAC, StateType} from '../../../../redux/store';

const {page, dialogsStyle, writeSend, textArea, button} = styles;

type PropsType = {
  state: StateType
  dispatch: (action: ActionsType) => void
}

const Friends = (props: PropsType) => {
  console.log(props);

  // массив друзей => друг
  const arrayFriends = props.state.friendsPage.friends.map(i => {
    return <Friend key={i.id} id={i.id} name={i.name} img={i.img}/>
  });

  // массив диалогов => диалог
  const arrayDialogs = props.state.friendsPage.dialogs.map(i => {
    return <Dialogs key={i.id} id={i.id} message={i.message}/>
  });

  // обновляем значение change у textarea
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeTextAC(e.currentTarget.value));
  }

  // добавляем сообщение в диалог по нажатию на кнопку
  const addMessageHandler = () => {
    props.dispatch(addMessageAC());
  }

  // добавляем сообщение в диалог по нажатию Enter
  const addMessageHandlerByEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      props.dispatch(addMessageByEnterAC());
    }
  }

  return (
    <section>
      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={page}>

        {/* друзья */}
        <div>
          {arrayFriends}
        </div>

        {/* диалоги */}
        <div className={dialogsStyle}>
          {arrayDialogs}

          {/* написать и отправить сообщение */}
          <div className={writeSend}>
            <textarea
              className={textArea}
              onChange={onChangeHandler}
              onKeyPress={addMessageHandlerByEnter}
              value={props.state.friendsPage.valueMessage}
            >
            </textarea>
            <button className={button} onClick={addMessageHandler}>Отправить</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Friends;
