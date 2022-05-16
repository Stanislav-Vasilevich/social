import React from 'react';
import s from '../../Pages.module.css';
import {ActionsType, AuthorPageType} from '../../../../redux/store';

type PropsType = {
  page: AuthorPageType
  dispatch: (action: ActionsType) => void
}

const AboutAuthor = (props: PropsType) => {
  return (
    <div>
      {/* фон первого блока */}
      <div className={s.background}>
        <img className={s.image} src={props.page.background} alt={props.page.altBackground}/>
      </div>

      {/* профиль пользователя */}
      <div className={s.profile}>
        <img className={s.avatar} src={props.page.avatar} alt={props.page.name}/>
        <div>
          <h2 className={s.name}>{props.page.name}</h2>
          <div className={s.description}>{props.page.description}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;
