import React from 'react';
import s from '../../Pages.module.css';
import {AuthorPageType} from '../../../../redux/author-reducer';
import {ActionsType} from '../../../../index';

type PropsType = {
  page: AuthorPageType
  dispatch: (action: ActionsType) => void
}

const AboutAuthor = (props: PropsType) => {
  const onChangeDescriptionHandler = () => {
    // changeDescriptionAC()
    console.log(props)
  }

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
					<div className={s.town}>{props.page.altBackground}</div>
          <div className={s.description} onDoubleClick={onChangeDescriptionHandler}>
						{`${props.page.description[0]}`}
					</div>
					<div className={s.description} onDoubleClick={onChangeDescriptionHandler}>
						{`${props.page.description[1]}`}
					</div>
					<div className={s.description} onDoubleClick={onChangeDescriptionHandler}>
						Х];Хзкщзыюзфпуювуыскшзешщтх2ъЪ]Ъ
					</div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;
