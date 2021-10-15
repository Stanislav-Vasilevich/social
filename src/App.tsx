import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {StateType, StoreType} from "./redux/state";

const {app, body, container} = styles;

type PropsType = {
  state: StateType
}

const App: React.FC<PropsType> = (props) => {
  return (
    <div className={app}>
      {/* шапка сайта */}
      <Header state={props.state}/>
      <div className={body}>
        <div className={container}>
          {/* страница */}
          <Page state={props.state}/>
        </div>
      </div>
    </div>
  );
}

export default App;
