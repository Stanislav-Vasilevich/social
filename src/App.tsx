import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Pages from "./components/Pages/Pages";
import {ActionsType} from './index';
import {AppStateType} from './redux/redux-store';

const {app, page, container} = styles;

type PropsType = {
  store: AppStateType
  dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {
  return (
    <div className={app}>
      {/* шапка сайта */}
      <Header store={props.store}/>
      {/* основной контент */}
      <main className={page}>
        {/* контейнер */}
        <div className={container}>
          <Pages store={props.store} dispatch={props.dispatch} />
        </div>
      </main>
    </div>
  );
}

export default App;
