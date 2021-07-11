import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import FaceSection from "./components/FaceSection/FaceSection";
import Page from "./components/Page/Page";
import {stateType} from "./redux/state";

// деструктуризация CSS модулей
const {app, body, container} = styles;

const App = (props: stateType) => {
  return (
    <div className={app}>
      <Header/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <FaceSection/>
        </div>
        {/* главная страница */}
        <Page globalState={props.globalState}/>
      </div>
    </div>
  );
}

export default App;
