import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import FaceSection from "./components/FaceSection/FaceSection";

// деструктуризация CSS
const {app, body, container, page, sideBar, info, photo, friends, footer} = styles;

const App = () => {
  return (
    <div className={app}>
      <Header/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <FaceSection/>
        </div>
        {/* главная страница */}
        <div className={page}>
          {/* сайт-бар */}
          <aside className={sideBar}>
            <div className={info}>Краткая информация</div>
            <div className={photo}>Фото</div>
            <div className={friends}>Друзья</div>
            <div className={footer}>Подвал сайта</div>
          </aside>
          {/* главный контент */}
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
