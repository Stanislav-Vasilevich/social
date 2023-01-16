import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import {ActionsType} from './index';
import {AppStateType} from './redux/redux-store';

const {app, container} = styles;

type PropsType = {
  store: AppStateType
  dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {
  return (
    <main className={app}>
      <Header store={props.store}/>
      <div className={container}>
        <Pages store={props.store} dispatch={props.dispatch}/>
      </div>
    </main>
  );
}

export default App;
