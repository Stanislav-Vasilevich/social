import React from 'react';
import './App.css';
import Header from "./Header";
import FaceSection from "./FaceSection";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="body">
        <FaceSection />
        <div className="page">
          <aside className="side-bar">
            <div className="side-bar__brief-information">Краткая информация</div>
            <div className="side-bar__photo">Фото</div>
            <div className="side-bar__friends">Друзья</div>
          </aside>
          <main className="main">
            главный контент
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
