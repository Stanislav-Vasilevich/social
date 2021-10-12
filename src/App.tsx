import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {StoreType} from "./redux/state";

const {app, body, container} = styles;

type PropsType = {
  store: StoreType
}

const App: React.FC<PropsType> = (props: PropsType) => {
  const state = props.store.getState();

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
