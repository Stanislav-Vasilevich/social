import React from "react";
import styles from './Publications.module.css';
import {Main} from "./Main/Main";

// деструктуризация CSS модулей
const {main, sideBar, info, photo, friends, footer} = styles;

const Publications = () => {
  return (
    <section className={main}>
      {/* сайт-бар */}
      <aside className={sideBar}>
        <div className={info}>Краткая информация</div>
        <div className={photo}>Фото</div>
        <div className={friends}>Друзья</div>
        <div className={footer}>Подвал сайта</div>
      </aside>
      {/* главный контент */}
      <Main />
    </section>
  )
}

export default Publications;