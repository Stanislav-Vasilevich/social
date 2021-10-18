import React from 'react';
import styles from './Page.module.css'
import {StoreType} from '../../redux/state';
import Navigation from "./Navigation/Navigation";
import Menu from "../Menu/Menu";
import sochi from './../../image/Sochi.jpeg'

// CSS
const {face, background, image, profile, avatar} = styles;

type PropsType = {
  store: StoreType
}

const Page = (props: PropsType) => {
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
          <h2>Енот обормот</h2>
        </div>

        {/* навигация */}
        <Menu state={props.store.getState()}/>

        {/* главная страница */}
        <Navigation store={props.store}/>
      </div>
    </>
  )
}

export default Page;
