import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import FaceSection from "./components/FaceSection/FaceSection";
import Page from "./components/Page/Page";

// деструктуризация CSS модулей
const {app, body, container} = styles;

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
        <Page />
      </div>
    </div>
  );
}

export default App;
