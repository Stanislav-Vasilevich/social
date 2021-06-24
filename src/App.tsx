import React from 'react';
import './App.css';
import Header from "./Header";
import FaceSection from "./components/FaceSection/FaceSection";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body">
        {/* первый блок */}
        <div className="container">
          <FaceSection/>
        </div>
        <div className="page">
          {/* сайт-бар */}
          <aside className="side-bar">
            <div className="side-bar__brief-information">Краткая информация</div>
            <div className="side-bar__photo">Фото</div>
            <div className="side-bar__friends">Друзья</div>
            <div className="footer">Подвал сайта</div>
          </aside>

          {/* главный контент */}
          <main className="main">
            главный контент
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
