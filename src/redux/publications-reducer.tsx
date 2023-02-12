import {v1} from 'uuid';
import { PostType } from './post-reducer'

const ADD_POST = 'ADD_POST';
const CHANGE_ADD_POST_TITLE = 'CHANGE_ADD_POST_TITLE';
const CHANGE_ADD_POST_TEXT = 'CHANGE_ADD_POST_TEXT';

export type PublicationsPageType = {
	posts: Array<PostType>
}
// export type ChangePostTitleACType = ReturnType<typeof changeAddPostTitleAC>
// export type ChangePostTextACType = ReturnType<typeof changeAddPostTextAC>
// export type AddPostACType = ReturnType<typeof addPostAC>
// export type PublicationPageActionType = ChangePostTitleACType
//   | ChangePostTextACType
//   | AddPostACType

const initialState = {
	posts: [
		{
			id: v1(),
			title: 'Поездка в Геленджик',
			description: 'Едем в Геленджик, ранний подъем, поезд, прибытие, съем жилья, экскурсия по набережной и по местным достопримечательностям',
			photo: 'https://funart.pro/uploads/posts/2021-03/1617192695_3-p-oboi-abkhaziya-gelendzhik-3.jpg',
			alt: 'Геленджик',
			text: 'Эта поездка была мега интересной. Всё началось 8 июня 2023 года, когда прозвинел будильник в 6 утра и на моё удивление я подорвался как ....',
			name: 'Станислав Василевич',
			data: '08.07.2023',
			likesCount: 4,
			commentStatus: false,
			direction: 'trip',
		},
		{
			id: v1(),
			title: 'Сахарная зависомость. Что она с нами делает?',
			description: 'Как я избавился от сахара',
			photo: 'https://funart.pro/uploads/posts/2021-03/1617192695_3-p-oboi-abkhaziya-gelendzhik-3.jpg',
			alt: 'Сахарная зависимость',
			text: 'Когда я начал активно заниматься спортом, меня стал мучить вопрос, как можно увеличить свою активность, почему я постоянно хочу спать, как можно повлиять на то, чтобы не чувствовать себя усталым и дипрессивным и я нашел ответ, оставалось только применить эту гипотезу на себе и вот что получилось меня просто ввело в ступор.',
			name: 'Станислав Василевич',
			data: '28.08.2023',
			likesCount: 1,
			commentStatus: false,
			direction: 'trip',
		},
	],
  // addingPost: {
  //   name: 'Stanislav',
  //   avatar: 'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg',
  //   valueTitle: '',
  //   valueText: ''
  // },
  // posts: [
  //   {
  //     id: v1(),
  //     avatar: 'https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo',
  //     title: 'Аффирмации на каждый день',
  //     text: 'Аффирмация на каждый день и далее пошел целый сплошной текст, который приводит к каким-то последствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
  //     likesCount: 6
  //   },
  //   {
  //     id: v1(),
  //     avatar: 'https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300',
  //     title: 'Программирование на javascript',
  //     text: 'Программирование на javascript и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
  //     likesCount: 2
  //   },
  //   {
  //     id: v1(),
  //     avatar: 'https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg',
  //     title: 'Обучение финансовой грамотности',
  //     text: 'Обучение финансовой грамотности и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
  //     likesCount: 4
  //   },
  //   {
  //     id: v1(),
  //     avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
  //     title: 'Поездка на Бали',
  //     text: 'Поездка на Бали и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вообще написано',
  //     likesCount: 1
  //   },
  // ]
}

// export const publicationsReducer = (state: PublicationsPageType = initialState, action: PublicationPageActionType) => {
//   switch (action.type) {
//     case CHANGE_ADD_POST_TITLE:
//       state.addingPost.valueTitle = action.message;
//
//       return state;
//     case CHANGE_ADD_POST_TEXT:
//       state.addingPost.valueText = action.message;
//
//       return state;
//     case ADD_POST:
//       const newPost = {
//         id: v1(),
//         avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
//         title: state.addingPost.valueTitle,
//         text: state.addingPost.valueText,
//         likesCount: 0
//       };
//
//       state.addingPost.valueText = '';
//       state.addingPost.valueTitle = '';
//
//       state.posts.unshift(newPost);
//
//       return state;
//     default:
//       return state;
//   }
// }
// export const changeAddPostTitleAC = (message: string) => {
//   return {type: CHANGE_ADD_POST_TITLE, message: message} as const
// }
// export const changeAddPostTextAC = (message: string) => {
//   return {type: CHANGE_ADD_POST_TEXT, message: message} as const
// }
// export const addPostAC = () => {
//   return {type: ADD_POST} as const
// }
