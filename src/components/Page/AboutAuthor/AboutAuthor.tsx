import React from 'react';
import s from './AboutAuthor.module.css';
import {AuthorPageType} from '../../../redux/author-reducer';
import {ActionsType} from '../../../index';
import styles from './../../../App.module.css';

type PropsType = {
  page: AuthorPageType
  dispatch: (action: ActionsType) => void
}

const AboutAuthor = (props: PropsType) => {
  return (
    <div className={`${styles.container} ${s.about}`}>
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
          <div className={s.description}>
						{`${props.page.description[0]}`}
					</div>
					<div className={s.description}>
						{`${props.page.description[1]}`}
					</div>
					<div className={s.description}>
						Привет! Меня зовут Станислав, я занимаюсь программированием, если тебе нужно сделать сайт, который увеличит количество новых клиентов, я буду рад помочь сделать крутейший сайт. Я занимаюсь профессиональной разработкой сайтов более 3-х лет и основной идеей является делать не просто сайты, а упаковку Вашего бизнеса, я не пишу бесполезные триггеры и прочие марекетинговые штучки, которые используют в своем жаргоне различные маркетологи, чтобы казаться более подкованными, чем Вы, я называю это все водой, вода это когда на сайте написано: "Качественно", "Скидки", "Не дорого", "Мы лучше всех". Моя задача раскрыть Ваш бизнес, показать чем именно является Ваше качество, от какой цены скидки и дешевле ли это рынка или просто Вы хотите обмануть клиента, любой обман будет послан мной далеко подальше, если Вы ведете грязный бизнес, обманываете или пытаетесь казаться лучше, чем Вы есть, тогда Вам точно не ко мне, идите к конкурентам, они Вам сделают и качественно и дешево. Также я занимаюсь рекламой, это не просто настроить яндекс директ, это целая эко-система, начиная с проектирования сайта и его страниц или секций и заканчивая потребительскими запросами и ответами на Вашем сайте на эти запросы. Не нужно вести пользователя на страницу оставьте заявку!
					</div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;
