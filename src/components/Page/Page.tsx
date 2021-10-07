import React from 'react';
import styles from './Page.module.css'
import Menu from '../Menu/Menu';
import {addMessage, addMessageByEnter, changeDialogsMessage, state} from '../../redux/state';
import Navigation from "./Navigation/Navigation";

// CSS
const {face, background, image, profile, avatar} = styles;

const Page = () => {
  return (
    <>
      <div className={face}>
        {/* фон первого блока */}
        <div className={background}>
          <img className={image}
               src="https://news-day-top.ru/iimnws/aHR0cDovL2luYy1uZXdzLnJ1L2RhdGEvaW5jL3VwbG9hZC8yMDIxLTA0LzIxL2ltYWdlLTUxNTktMTYxODk3MzA3NC5qcGc="
               alt="Сочи"/>
        </div>

        {/* профиль пользователя */}
        <div className={profile}>
          <img className={avatar}
               src="https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg"
               alt=""/>
          <h2>Енот обормот</h2>
        </div>

        {/* навигация */}
        {/*<Menu/>*/}

        {/* главная страница */}
        <Navigation state={state}
                    changeDialogsMessage={changeDialogsMessage}
                    addMessage={addMessage}
                    addMessageByEnter={addMessageByEnter}/>
      </div>
    </>
  )
}

export default Page;
