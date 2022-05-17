import {addMessageAC, addMessageByEnterAC, changeDialogsMessageAC, friendsReducer} from './friends-reducer';
import {addPostAC, changeAddPostTextAC, changeAddPostTitleAC, publicationsReducer} from './publications-reducer';
import authorReducer from './author-reducer';
import newsReducer from './news-reducer';

export type UserType = {
  name: string
  avatar: string
}
export type HeaderType = {
  menu: Array<MenuItemsType>
  user: UserType
}
export type AuthorPageType = {
  background: string
  altBackground: string
  avatar: string
  name: string
  description: string
}
export type NewsPageType = {
  avatar: string
  name: string
  data: string
  title: string
  text: string
  photo: string
  alt: string
  likesCount: number
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
  navigation: Array<MenuItemsType>
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
  author: AuthorPageType
  news: NewsPageType
  friends: FriendsPageType
  publications: PublicationsPageType
}
export type PagesType = {
  page: PageType
}
export type MenuItemsType = {
  id: string
  item: string
  path: string
}
// export type StateType = {
//   header: HeaderType
//   pages: PagesType
// }
export type StoreType = {
  header: HeaderType
  author: AuthorPageType
  news: NewsPageType
  friendsPage: FriendsPageType
  publicationsPage: PublicationsPageType
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

// const store: StoreType = {
//   _state: {
//     header: {
//       menu: [
//         {id: v1(), item: 'Автор', path: '/'},
//         {id: v1(), item: 'Новости', path: '/news'},
//         {id: v1(), item: 'Друзья', path: '/friends'},
//         {id: v1(), item: 'Группы', path: '/groups'},
//       ],
//       user: {
//         name: 'Stanislav',
//         avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'
//       }
//     },
//     pages: {
//       page: {
//         author: {
//           background: 'https://www.sgmbg.ru/upload/resize_cache/iblock/e71/1450_750_2/e71bd49ed67671a260e4748d6793e299.jpg',
//           altBackground: 'Сочи',
//           avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg',
//           name: 'Станислав Василевич',
//           description: 'Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React',
//         },
//         news: {
//           avatar: 'https://www.neizvestniy-geniy.ru/images/users/2020/04/148421.jpg',
//           name: 'Алексей Етеревсков',
//           data: '12.08.2021',
//           title: 'Был в Крыму',
//           text: 'Ездил в Крым, классно отдохнул, посмотрел на местные виды и сделал отличное фото!',
//           photo: 'https://top10a.ru/wp-content/uploads/2020/01/lastochkino_gnezdo_swallow_nest2-1shyu.jpg',
//           alt: 'Крым',
//           likesCount: 4,
//         },
//         friends: {
//           navigation: [
//             {id: v1(), item: 'Публикации', path: '/publications'},
//             {id: v1(), item: 'Сообщения', path: '/messages'},
//             {id: v1(), item: 'Фото', path: '/photo'},
//           ],
//           persons: [
//             {id: v1(), name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
//             {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
//             {id: v1(), name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
//           ],
//           valueMessage: 'Как твои дела бро?',
//           dialogs: [
//             {id: v1(), message: 'Hello! How are you?'},
//             {id: v1(), message: 'Hey! I`m work, I`m find!'},
//             {id: v1(), message: 'It`s good))'},
//           ],
//         },
//         publications: {
//           addingPost: {
//             name: 'Stanislav',
//             avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg',
//             valueTitle: '',
//             valueText: ''
//           },
//           posts: [
//             {
//               id: v1(),
//               avatar: 'https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo',
//               title: 'Аффирмации на каждый день',
//               text: 'Аффирмация на каждый день и далее пошел целый сплошной текст, который приводит к каким-то последствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
//               likesCount: 6
//             },
//             {
//               id: v1(),
//               avatar: 'https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300',
//               title: 'Программирование на javascript',
//               text: 'Программирование на javascript и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
//               likesCount: 2
//             },
//             {
//               id: v1(),
//               avatar: 'https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg',
//               title: 'Обучение финансовой грамотности',
//               text: 'Обучение финансовой грамотности и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
//               likesCount: 4
//             },
//             {
//               id: v1(),
//               avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
//               title: 'Поездка на Бали',
//               text: 'Поездка на Бали и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вообще написано',
//               likesCount: 1
//             },
//           ]
//         }
//       }
//     },
//   },
//   _callSubscriber() {
//     console.log('обновил state');
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   getState() {
//     return this._state;
//   },
//   dispatch(action) {
//     this._state.pages.page.friends = friendsReducer(this._state.pages.page.friends, action);
//     this._state.pages.page.publications = publicationsReducer(this._state.pages.page.publications, action);
//
//     this._callSubscriber();
//   }
// }

// export default store;
