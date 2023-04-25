import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import {ActionsType} from './index';
import {AppStateType} from './redux/redux-store';
import Page from "./components/Page/Page";

type PropsType = {
  state: AppStateType
  dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {
  return (
		<div className={styles.app}>
			<Header store={props.state}/>
			<main className={styles.main}>
				<Page store={props.state} dispatch={props.dispatch}/>
			</main>
		</div>
  );
}

export default App;
