import React from 'react';
import './FaceSection.css'
import Menu from "../menu/Menu";

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
        <Menu/>
      </div>
    </>
  )
}

export default FaceSection;
