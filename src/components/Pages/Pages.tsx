import React from 'react';
import {ActionsType, StoreType} from '../../redux/store';
import styles from './Pages.module.css';
import Page from './Page/Page';
import Navigation from "./Navigation/Navigation";

type PropsType = {
  store: StoreType
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
