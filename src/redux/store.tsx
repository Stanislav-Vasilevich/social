import {v1} from 'uuid';
import {ChangeEvent} from 'react';

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
export type MenuType = {
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
export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionsType) => void
}
type ChangeDialogsMessageACType = ReturnType<typeof changeTextAC>
type AddMessageACType = ReturnType<typeof addMessageAC>
type AddMessageByEnterACType = ReturnType<typeof addMessageByEnterAC>
export type ActionsType = AddMessageACType | AddMessageByEnterACType | ChangeDialogsMessageACType

const store: StoreType = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('обновил state');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === 'CHANGE-DIALOGS-MESSAGE') {
      this._state.friendsPage.valueMessage = action.message;

      this._callSubscriber();
    }
    else if (action.type === 'ADD-MESSAGE') {
      console.log('ADD-MESSAGE');

      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.friendsPage.valueMessage
      };

      this._state.friendsPage.dialogs.push(newMessage);
      this._state.friendsPage.valueMessage = '';

      this._callSubscriber();
    }
    else if (action.type === 'ADD-MESSAGE-BY-ENTER') {
      console.log('ADD-MESSAGE-BY-ENTER');

      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.friendsPage.valueMessage
      };

      this._state.friendsPage.dialogs.push(newMessage);
      this._state.friendsPage.valueMessage = '';

      this._callSubscriber();
    }
    else {
      return action;
    }
  }
}

export const changeTextAC = (text: string) => {
  return {type: 'CHANGE-DIALOGS-MESSAGE', message: text} as const
}

export const addMessageAC = () => {
  return {type: 'ADD-MESSAGE'} as const
}

export const addMessageByEnterAC = () => {
  return {type: 'ADD-MESSAGE-BY-ENTER'} as const
}

export default store;
