import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {GlobalStateType} from './redux/state';
import {menuItemsType} from "./components/Menu/Menu";

const {app, body, container} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (massage: string) => void
  addMessageByEnter: () => void
  menuItems: Array<menuItemsType>
}

const App: React.FC<PropsType> = ({state, changeDialogsMessage, addMessage, addMessageByEnter, menuItems}) => {
  return (
    <div className={app}>
      <Header menuItems={menuItems}/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <Page menuItems={menuItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
