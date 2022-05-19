import React from 'react';
import styles from './Pages.module.css';
import Page from './Page/Page';
import {ActionsType} from '../../index';
import {AppStateType} from '../../redux/redux-store';

type PropsType = {
  store: AppStateType
  dispatch: (action: ActionsType) => void
}

const Pages = (props: PropsType) => {
  return (
    <>
      {/* первый блок профиля автора */}
      <div className={styles.pages}>
        {/* главная страница */}
        <Page
          store={props.store}
          dispatch={props.dispatch}
        />
      </div>
    </>
  )
}

export default Pages;
