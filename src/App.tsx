import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import {StoreType} from "./redux/state";

const {app, body, container} = styles;

type PropsType = {
  store: StoreType
}

const App: React.FC<PropsType> = (props) => {
  return (
    <div className={app}>
      {/* шапка сайта */}
      <Header store={props.store}/>
      <div className={body}>
        <div className={container}>
          {/* страница */}
          <Page store={props.store}/>
        </div>
      </div>
    </div>
  );
}

export default App;
