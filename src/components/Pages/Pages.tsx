import React from 'react';
import styles from './Page.module.css'
import {StoreType} from '../../redux/store';
import Page from './Page/Page';
import Menu from '../Header/Menu/Menu';
import sochi from './../../image/Sochi.jpeg'
import Navigation from "./Navigation/Navigation";

// CSS
const {face, background, image, profile, avatar, name, description} = styles;

type PropsType = {
  store: StoreType
}

const Pages = (props: PropsType) => {
  return (
    <>
      <div className={face}>
        {/* фон первого блока */}
        <div className={background}>
          <img className={image}
               src={sochi}
               alt="Сочи"/>
        </div>

        {/* профиль пользователя */}
        <div className={profile}>
          <img className={avatar}
               src="https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg"
               alt=""/>
          <div>
            <h2 className={name}>Станислав Василевич</h2>
            <div className={description}>Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React</div>
          </div>

        </div>

        {/* навигация */}
        <Navigation menuItems={props.store.getState().menu.page}/>

        {/* главная страница */}
        <Page store={props.store}/>
      </div>
    </>
  )
}

export default Pages;
