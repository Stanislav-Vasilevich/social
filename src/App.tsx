import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import FaceSection from "./components/FaceSection/FaceSection";
import Page from "./components/Page/Page";
import {addMessage, GlobalStateType} from "./redux/state";

const {app, body, container} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: (massage: string) => void
}

const App: React.FC<PropsType> = ({state, addMessage}) => {
  return (
    <div className={app}>
      <Header/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <FaceSection/>
        </div>
        {/* главная страница */}
        <Page state={state} addMessage={addMessage}/>
      </div>
    </div>
  );
}

export default App;
