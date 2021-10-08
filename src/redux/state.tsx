import {v1} from 'uuid';

let rerender: any;

export type FriendDataType = {
  id: string
  name: string
  img: string
}

type DialogsDataType = {
  id: string
  message: string
}

type FriendsPageType = {
  friends: Array<FriendDataType>
  valueMessage: string
  dialogs: Array<DialogsDataType>
}

export type MenuItemsType = {
  id: number
  item: string
  path: string
}

type MenuType = {
  header: Array<MenuItemsType>
  page: Array<MenuItemsType>
}

type HeaderType = {}
type PageType = {}

export type StateType = {
  friendsPage: FriendsPageType
  menu: MenuType
  header: HeaderType
  page: PageType
}

export const state: StateType = {
  friendsPage: {
    friends: [
      {id: v1(), name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
      {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
      {id: v1(), name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
    ],
    valueMessage: 'Как твои дела бро?',
    dialogs: [
      {id: v1(), message: 'Hello! How are you?'},
      {id: v1(), message: 'Hey! I`m work, I`m find!'},
      {id: v1(), message: 'It`s good))'}
    ],
  },
  menu: {
    header: [
      {id: 1, item: 'Главная', path: '/publications'},
      {id: 2, item: 'Друзья', path: '/friends'},
      {id: 3, item: 'Watch', path: '/watch'},
      {id: 4, item: 'Группы', path: '/group'},
      {id: 5, item: 'Игры', path: '/games'}
    ],
    page: [
      {id: 1, item: 'Публикации', path: '/publications'},
      {id: 2, item: 'Информация', path: '/information'},
      {id: 3, item: 'Друзья', path: '/friends'},
      {id: 4, item: 'Фото', path: '/photo'},
      {id: 5, item: 'Архив историй', path: '/stories'},
      {id: 6, item: 'Видео', path: '/video'},
      {id: 7, item: 'Еще', path: '/else'}
    ]
  },
  header: {},
  page: {},
}

export const changeDialogsMessage = (message: string) => {
  state.friendsPage.valueMessage = message;

  rerender();
}

export const addMessage = () => {
  const newMessage = {id: v1(), message: state.friendsPage.valueMessage};

  state.friendsPage.dialogs.push(newMessage);
  state.friendsPage.valueMessage = '';

  rerender();
}

export const addMessageByEnter = () => {
  addMessage();
}

export const subscriber = (observer: any) => {
  rerender = observer;
}
