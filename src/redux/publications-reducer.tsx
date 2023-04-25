import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const CHANGE_ADD_POST_TITLE = 'CHANGE-ADD-POST-TITLE';
const CHANGE_ADD_POST_TEXT = 'CHANGE-ADD-POST-TEXT';

type PostType = {
	id: string
	title: string
	description: string
	photo: string
	alt: string
	text: string
	name: string
	date: string
	likesCount: number
	commentStatus: boolean
	direction: string
}

export type PublicationsPageType = {
	posts: Array<PostType>
}
export type ChangePostTitleACType = ReturnType<typeof changeAddPostTitleAC>
export type ChangePostTextACType = ReturnType<typeof changeAddPostTextAC>
export type AddPostACType = ReturnType<typeof addPostAC>
export type PublicationPageActionType = ChangePostTitleACType
  | ChangePostTextACType
  | AddPostACType

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
			date: '08.07.2023',
			likesCount: 4,
			commentStatus: false,
			direction: 'trip',
		},
		{
			id: v1(),
			title: 'Сахарная зависомость. Что она с нами делает?',
			description: 'Как я избавился от сахара',
			photo: 'https://bormentaldoctor.ru/wp-content/uploads/2019/02/25064603.jpg',
			alt: 'Сахарная зависимость',
			text: 'Когда я начал активно заниматься спортом, меня стал мучить вопрос, как можно увеличить свою активность, почему я постоянно хочу спать, как можно повлиять на то, чтобы не чувствовать себя усталым и дипрессивным и я нашел ответ, оставалось только применить эту гипотезу на себе и вот что получилось меня просто ввело в ступор.',
			name: 'Станислав Василевич',
			date: '28.08.2023',
			likesCount: 1,
			commentStatus: false,
			direction: 'trip',
		},
	],
}

export const publicationsReducer = (state: PublicationsPageType = initialState, action: PublicationPageActionType) => {
  return state;
}

export const changeAddPostTitleAC = (message: string) => {
  return {type: CHANGE_ADD_POST_TITLE, message: message} as const
}
export const changeAddPostTextAC = (message: string) => {
  return {type: CHANGE_ADD_POST_TEXT, message: message} as const
}
export const addPostAC = () => {
  return {type: ADD_POST} as const
}
