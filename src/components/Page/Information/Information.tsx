import React from "react";
import styles from './Information.module.css';

// деструктуризация CSS модулей
const {main, section, info, nav, friends, photo, sport, music, films} = styles;

const Information = () => {
  return (
    <section className={main}>
      <div className={section}>
        <div className={info}>
          <h2>Информация</h2>
          <nav className={nav}>
            <a href="#">Общие сведения</a>
            <a href="#">Работа и образование</a>
            <a href="#">Места проживания</a>
            <a href="#">Контактная и основная информация</a>
            <a href="#">Семья и отношения</a>
            <a href="#">Информация о вас</a>
            <a href="#">События из жизни</a>
          </nav>
        </div>
      </div>
      <div className={friends}></div>
      <div className={photo}></div>
      <div className={sport}></div>
      <div className={music}></div>
      <div className={films}></div>
    </section>
  )
}

export default Information;