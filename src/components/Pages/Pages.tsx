import React from 'react';
import {StoreType} from '../../redux/store';
import styles from './Pages.module.css';
import sochi from './../../image/Sochi.jpeg';
import Page from './Page/Page';
import Navigation from "./Navigation/Navigation";

// CSS
const {pages, background, image, profile, avatar, name, description} = styles;

type PropsType = {
  store: StoreType
}

const Pages = (props: PropsType) => {
  return (
    <>
      {/* первый блок профиля автора */}
      <div className={pages}>
        {/* навигация */}
        <Navigation menuItems={props.store.getState().menu.page}/>

        {/* главная страница */}
        <Page store={props.store.getState().pages}/>
      </div>
    </>
  )
}

export default Pages;
