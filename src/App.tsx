import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import FaceSection from "./components/faceSection/FaceSection";
import {Main} from "./Main";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body">
        {/* первый блок */}
        <div className="container">
          <FaceSection/>
        </div>
        {/* главная страница */}
        <div className="page">
          {/* сайт-бар */}
          <aside className="side-bar">
            <div className="side-bar__brief-information">Краткая информация</div>
            <div className="side-bar__photo">Фото</div>
            <div className="side-bar__friends">Друзья</div>
            <div className="footer">Подвал сайта</div>
          </aside>
          {/* главный контент */}
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
