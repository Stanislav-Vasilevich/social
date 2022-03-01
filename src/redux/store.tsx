import {v1} from 'uuid';

const CHANGE_DIALOGS_MESSAGE = 'CHANGE-DIALOGS-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_BY_ENTER = 'ADD-MESSAGE-BY-ENTER';

export type FriendDataType = {
  id: string
  name: string
  img: string
}
type DialogsDataType = {
  id: string
  message: string
}

export type FriendsPageType = {
  persons: Array<FriendDataType>
  valueMessage: string
  dialogs: Array<DialogsDataType>
}

export type PageType = {
  friends: FriendsPageType
}

export type PagesType = {
  navigation: Array<MenuItemsType>
  page: PageType
}

export type MenuItemsType = {
  id: number
  item: string
  path: string
}

type HeaderType = {
  menu: Array<MenuItemsType>
}

export type MenuType = {
  page: Array<MenuItemsType>
}
export type StateType = {
  header: HeaderType
  pages: PagesType
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
    header: {
      menu: [
        {id: 1, item: 'Автор', path: '/'},
        {id: 2, item: 'Новости', path: '/news'},
        {id: 3, item: 'Друзья', path: '/friends'},
        {id: 4, item: 'Группы', path: '/groups'},
      ]
    },
    pages: {
      navigation: [
        {id: 1, item: 'Публикации', path: '/publications'},
        {id: 2, item: 'Сообщения', path: '/messages'},
        {id: 3, item: 'Фото', path: '/photo'},
      ],
      page: {
        friends: {
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
      }
    },
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
    if (action.type === CHANGE_DIALOGS_MESSAGE) {
      this._state.pages.page.friends.valueMessage = action.message;

      this._callSubscriber();
    }
    else if (action.type === ADD_MESSAGE) {
      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.pages.page.friends.valueMessage
      };

      this._state.pages.page.friends.dialogs.push(newMessage);
      this._state.pages.page.friends.valueMessage = '';

      this._callSubscriber();
    }
    else if (action.type === ADD_MESSAGE_BY_ENTER) {
      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.pages.page.friends.valueMessage
      };

      this._state.pages.page.friends.dialogs.push(newMessage);
      this._state.pages.page.friends.valueMessage = '';

      this._callSubscriber();
    }
    else {
      return action;
    }
  }
}

export const changeTextAC = (text: string) => {
  return {type: CHANGE_DIALOGS_MESSAGE, message: text} as const
}

export const addMessageAC = () => {
  return {type: ADD_MESSAGE} as const
}

export const addMessageByEnterAC = () => {
  return {type: ADD_MESSAGE_BY_ENTER} as const
}

export default store;
