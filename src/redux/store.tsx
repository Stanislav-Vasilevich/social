import {v1} from 'uuid';

const CHANGE_DIALOGS_MESSAGE = 'CHANGE-DIALOGS-MESSAGE';
const CHANGE_ADD_POST_TEXT = 'CHANGE_ADD_POST_TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_BY_ENTER = 'ADD-MESSAGE-BY-ENTER';
const ADD_POST = 'ADD_POST';

export type UserType = {
  name: string
  avatar: string
}

type HeaderType = {
  menu: Array<MenuItemsType>
  user: UserType
}

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

export type PostsType = {
  id: string
  avatar: string
  title: string
  text: string
  likesCount: number
}

export type AddingPostType = {
  name: string
  avatar: string
  valueTextArea: string
}

export type PublicationsPageType = {
  addingPost: AddingPostType
  posts: Array<PostsType>
}

export type PageType = {
  friends: FriendsPageType
  publications: PublicationsPageType
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
type ChangeDialogsMessageACType = ReturnType<typeof changeDialogsMessageAC>
type AddMessageACType = ReturnType<typeof addMessageAC>
type AddMessageByEnterACType = ReturnType<typeof addMessageByEnterAC>
type ChangePostMessageACType = ReturnType<typeof changeAddPostMessageAC>
type AddPostACType = ReturnType<typeof addPostAC>
export type ActionsType =
  ChangeDialogsMessageACType
  | AddMessageACType
  | AddMessageByEnterACType
  | ChangePostMessageACType
  | AddPostACType

const store: StoreType = {
  _state: {
    header: {
      menu: [
        {id: 1, item: 'Автор', path: '/'},
        {id: 2, item: 'Новости', path: '/news'},
        {id: 3, item: 'Друзья', path: '/friends'},
        {id: 4, item: 'Группы', path: '/groups'},
      ],
      user: {
        name: 'Stanislav',
        avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'
      }
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
        publications: {
          addingPost: {
            name: 'Stanislav',
            avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg',
            valueTextArea: ''
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
    } else if (action.type === ADD_MESSAGE) {
      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.pages.page.friends.valueMessage
      };

      this._state.pages.page.friends.dialogs.push(newMessage);
      this._state.pages.page.friends.valueMessage = '';

      this._callSubscriber();
    } else if (action.type === ADD_MESSAGE_BY_ENTER) {
      const newMessage: DialogsDataType = {
        id: v1(),
        message: this._state.pages.page.friends.valueMessage
      };

      this._state.pages.page.friends.dialogs.push(newMessage);
      this._state.pages.page.friends.valueMessage = '';

      this._callSubscriber();
    } else if (action.type === CHANGE_ADD_POST_TEXT) {
      this._state.pages.page.publications.addingPost.valueTextArea = action.message;

      this._callSubscriber();
    } else if (action.type === ADD_POST) {
      const newPost = {
        id: v1(),
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
        title: 'Мир на земле',
        text: 'Человечеству нужен Мир на земле и далее пошел целый сплошной текст, который приводит к каким-то последствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
        likesCount: 0
      };

      this._state.pages.page.publications.addingPost.valueTextArea = '';

      this._state.pages.page.publications.posts.unshift(newPost);

      this._callSubscriber();
    } else {
      return action;
    }
  }
}

// add dialog from page friends
export const changeDialogsMessageAC = (text: string) => {
  return {type: CHANGE_DIALOGS_MESSAGE, message: text} as const
}

export const addMessageAC = () => {
  return {type: ADD_MESSAGE} as const
}

export const addMessageByEnterAC = () => {
  return {type: ADD_MESSAGE_BY_ENTER} as const
}

// add post
export const changeAddPostMessageAC = (message: string) => {
  return {type: CHANGE_ADD_POST_TEXT, message: message} as const
}

export const addPostAC = () => {
  return {type: ADD_POST} as const
}

export default store;
