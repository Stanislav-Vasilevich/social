import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import FaceSection from "./components/FaceSection/FaceSection";
import Publications from "./components/Publications/Publications";
import Information from "./components/Information/Information";
import {Route} from "react-router-dom";

// деструктуризация CSS модулей
const {app, body, container, page} = styles;

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
          <Route component={Publications} />
          <Route component={Information} />
        </div>
      </div>
    </div>
  );
}

export default App;
