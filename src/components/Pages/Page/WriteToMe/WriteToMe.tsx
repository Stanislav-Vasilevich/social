import React from 'react';
import styles from './WriteToMe.module.css';
import {Main} from "../Publications/Main/Main";

const {main} = styles;

function WriteToMe() {
  return (
    <section className={main}>
      {/* сайт-бар */}
      {/*<aside className={sideBar}>*/}
      {/*  <div className={info}>Краткая информация</div>*/}
      {/*  <div className={photo}>Фото</div>*/}
      {/*  <div className={friends}>Друзья</div>*/}
      {/*  <div className={footer}>Подвал сайта</div>*/}
      {/*</aside>*/}
      {/* главный контент */}
      <Main/>
    </section>
  )
}

export default WriteToMe;
