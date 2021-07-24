import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import FaceSection from "./components/FaceSection/FaceSection";
import Page from "./components/Page/Page";
import {GlobalStateType} from "./redux/state";

const {app, body, container} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (massage: string) => void
  addMessageByEnter: () => void
}

const App: React.FC<PropsType> = ({state, changeDialogsMessage,  addMessage, addMessageByEnter}) => {
  return (
    <div className={app}>
      <Header/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <FaceSection/>
        </div>
        {/* главная страница */}
        <Page state={state} changeDialogsMessage={changeDialogsMessage} addMessage={addMessage} addMessageByEnter={addMessageByEnter}/>
      </div>
    </div>
  );
}

export default App;
