import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {GlobalStateType} from './redux/state';
import {menuType} from "./index";

const {app, body, container} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (massage: string) => void
  addMessageByEnter: () => void
  menuData: menuType
}

const App: React.FC<PropsType> = (
  {
    state,
    changeDialogsMessage,
    addMessage,
    addMessageByEnter,
    menuData
  }
) => {
  return (
    <div className={app}>
      <Header menuData={menuData}/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <Page menuData={menuData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
