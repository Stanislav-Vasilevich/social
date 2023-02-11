import React from 'react';
import styles from './Publications.module.css';
import {AddComment} from './AddComment/AddComment';
import {PublicationsPageType} from '../../../../redux/publications-reducer';
import {ActionsType} from '../../../../index';

type PropsType = {
  page: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

const Publications = (props: PropsType) => {
  return (
    <section>
      {/* сайт-бар */}
      {/*<aside className={styles.sideBar}>*/}
      {/*  <div className={styles.info}>Краткая информация</div>*/}
      {/*  <div className={styles.photo}>Фото</div>*/}
      {/*  <div className={styles.friends}>Друзья</div>*/}
      {/*  <div className={styles.footer}>Подвал сайта</div>*/}
      {/*</aside>*/}
      {/* главный контент */}
      {/*<AddComment*/}
      {/*  mainContent={props.page}*/}
      {/*  dispatch={props.dispatch}*/}
      {/*/>*/}
			hello i am publications
    </section>
  )
}

export default Publications;
