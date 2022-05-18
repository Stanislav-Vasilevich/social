import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';
import Dialogs from './Dialogs/Dialogs';
import {ActionsType, FriendsPageType} from '../../../../redux/store';
import {addMessageAC, addMessageByEnterAC, changeDialogsMessageAC} from '../../../../redux/friends-reducer';
import Navigation from '../../Navigation/Navigation';

type PropsType = {
  page: FriendsPageType
  dispatch: (action: ActionsType) => void
}

const Friends = (props: PropsType) => {
  // массив друзей => друг
  const arrayFriends = props.page.persons.map(i => {
    return (
      <Friend
        key={i.id}
        id={i.id}
        name={i.name}
        img={i.img}
      />
    )
  });

  // массив диалогов => диалог
  const arrayDialogs = props.page.dialogs.map(i => {
    return (
      <Dialogs
        key={i.id}
        id={i.id}
        message={i.message}
      />
    )
  });

  // обновляем значение change у textarea
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeDialogsMessageAC(e.currentTarget.value));
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
      {/* навигация */}
      <Navigation menuItems={props.page.navigation}/>

      <h2>Друзья</h2>

      {/* блок с друзьями */}
      <div className={s.page}>

        {/* друзья */}
        <div className={s.arrayFriends}>
          {arrayFriends}
        </div>

        {/* диалоги */}
        <div className={s.dialogsStyle}>
          {arrayDialogs}

          {/* написать и отправить сообщение */}
          <div className={s.writeSend}>
            <textarea
              className={s.textArea}
              onChange={onChangeHandler}
              onKeyPress={addMessageHandlerByEnter}
              value={props.page.valueMessage}
            >
            </textarea>
            <button className={s.button} onClick={addMessageHandler}>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Friends;
