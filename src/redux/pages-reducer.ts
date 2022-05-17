import {v1} from 'uuid';
import {ActionsType, PagesType} from './store';

const initialState = {
  page: {
    author: {
      background: 'https://www.sgmbg.ru/upload/resize_cache/iblock/e71/1450_750_2/e71bd49ed67671a260e4748d6793e299.jpg',
      altBackground: 'Сочи',
      avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg',
      name: 'Станислав Василевич',
      description: 'Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React',
    },
    news: {
      avatar: 'https://www.neizvestniy-geniy.ru/images/users/2020/04/148421.jpg',
      name: 'Алексей Етеревсков',
      data: '12.08.2021',
      title: 'Был в Крыму',
      text: 'Ездил в Крым, классно отдохнул, посмотрел на местные виды и сделал отличное фото!',
      photo: 'https://top10a.ru/wp-content/uploads/2020/01/lastochkino_gnezdo_swallow_nest2-1shyu.jpg',
      alt: 'Крым',
      likesCount: 4,
    },
    friends: {
      navigation: [
        {id: v1(), item: 'Публикации', path: '/publications'},
        {id: v1(), item: 'Сообщения', path: '/messages'},
        {id: v1(), item: 'Фото', path: '/photo'},
      ],
      persons: [
        {id: v1(), name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
        {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
        {id: v1(), name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
      ],
      valueMessage: 'Как твои дела бро?',
      dialogs: [
        {id: v1(), message: 'Hello! How are you?'},
        {id: v1(), message: 'Hey! I`m work, I`m find!'},
        {id: v1(), message: 'It`s good))'},
      ],
    },
    publications: {
      addingPost: {
        name: 'Stanislav',
        avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg',
        valueTitle: '',
        valueText: ''
      },
      posts: [
        {
          id: v1(),
          avatar: 'https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo',
          title: 'Аффирмации на каждый день',
          text: 'Аффирмация на каждый день и далее пошел целый сплошной текст, который приводит к каким-то последствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
          likesCount: 6
        },
        {
          id: v1(),
          avatar: 'https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300',
          title: 'Программирование на javascript',
          text: 'Программирование на javascript и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
          likesCount: 2
        },
        {
          id: v1(),
          avatar: 'https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg',
          title: 'Обучение финансовой грамотности',
          text: 'Обучение финансовой грамотности и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
          likesCount: 4
        },
        {
          id: v1(),
          avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
          title: 'Поездка на Бали',
          text: 'Поездка на Бали и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вообще написано',
          likesCount: 1
        },
      ]
    }
  }
}

const pagesReducer = (state: PagesType = initialState, action: ActionsType) => {

  return state;
}

export default pagesReducer;
