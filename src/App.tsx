import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import {StoreType} from "./redux/store";
import Page from "./components/Page/Page";

const {app, page, container} = styles;

type PropsType = {
  store: StoreType
}

const App = (props: PropsType) => {
  return (
    <div className={app}>
      {/* шапка сайта */}
      <Header store={props.store}/>
      <div className={page}>
        <div className={container}>
          {/* страница */}
          <Page store={props.store} />
        </div>
      </div>
    </div>
  );
}

export default App;
