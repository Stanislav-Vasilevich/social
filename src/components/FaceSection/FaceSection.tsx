import React from 'react';
import './FaceSection.css'

const FaceSection = () => {
  return (
    <>
      <div className="face">
        {/* фон первого блока */}
        <div className="background">
          <img className="background__image" src="https://news-day-top.ru/iimnws/aHR0cDovL2luYy1uZXdzLnJ1L2RhdGEvaW5jL3VwbG9hZC8yMDIxLTA0LzIxL2ltYWdlLTUxNTktMTYxODk3MzA3NC5qcGc=" alt="Сочи"/>
        </div>
        {/* профиль пользователя */}
        <div className="profile">
          <img className="profile__avatar" src="https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg" alt=""/>
          <h2>Енот обормот</h2>
        </div>
        <nav className="menu">
          <a className="menu__item" href="#">Публикации</a>
          <a className="menu__item" href="#">Информация</a>
          <a className="menu__item" href="#">Друзья</a>
          <a className="menu__item" href="#">Фото</a>
          <a className="menu__item" href="#">Архив историй</a>
          <a className="menu__item" href="#">Видео</a>
          <a className="menu__item" href="#">Еще</a>
        </nav>
      </div>
    </>
  )
}

export default FaceSection;
