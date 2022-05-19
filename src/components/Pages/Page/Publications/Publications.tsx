import React from 'react';
import styles from './Publications.module.css';
import {Main} from './Main/Main';
import {PublicationsPageType} from '../../../../redux/publications-reducer';
import {ActionsType} from '../../../../index';

type PropsType = {
  page: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

const Publications = (props: PropsType) => {
  return (
    <section className={styles.main}>
      {/* сайт-бар */}
      <aside className={styles.sideBar}>
        <div className={styles.info}>Краткая информация</div>
        <div className={styles.photo}>Фото</div>
        <div className={styles.friends}>Друзья</div>
        <div className={styles.footer}>Подвал сайта</div>
      </aside>
      {/* главный контент */}
      <Main
        mainContent={props.page}
        dispatch={props.dispatch}
      />
    </section>
  )
}

export default Publications;
