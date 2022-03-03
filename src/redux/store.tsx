import {v1} from 'uuid';
import {addMessageAC, addMessageByEnterAC, changeDialogsMessageAC, friendsReducer} from "./friends-reducer";
import {addPostAC, changeAddPostTextAC, changeAddPostTitleAC, publicationsReducer} from "./publications-reducer";

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
export type DialogsDataType = {
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
  valueTitle: string
  valueText: string
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
export type ChangeDialogsMessageACType = ReturnType<typeof changeDialogsMessageAC>
export type AddMessageACType = ReturnType<typeof addMessageAC>
export type AddMessageByEnterACType = ReturnType<typeof addMessageByEnterAC>
export type ChangePostTitleACType = ReturnType<typeof changeAddPostTitleAC>
export type ChangePostTextACType = ReturnType<typeof changeAddPostTextAC>
export type AddPostACType = ReturnType<typeof addPostAC>
export type ActionsType =
  ChangeDialogsMessageACType
  | AddMessageACType
  | AddMessageByEnterACType
  | ChangePostTitleACType
  | ChangePostTextACType
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
    friendsReducer(this._state.pages.page.friends, action);
    publicationsReducer(this._state.pages.page.publications, action);

    this._callSubscriber();
  }
}

export default store;
