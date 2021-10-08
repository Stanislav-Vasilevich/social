import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {StateType} from './redux/state';

const {app, body, container} = styles;

type PropsType = {
  state: StateType
  addMessage: () => void
  changeDialogsMessage: (massage: string) => void
  addMessageByEnter: () => void
}

const App: React.FC<PropsType> = (
  {
    state,
    changeDialogsMessage,
    addMessage,
    addMessageByEnter,
  }
) => {
  return (
    <div className={app}>
      <Header state={state}/>
      <div className={body}>
        {/* первый блок */}
        <div className={container}>
          <Page state={state}/>
        </div>
      </div>
    </div>
  );
}

export default App;
