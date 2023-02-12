import {v1} from "uuid";

export type PostType = {
	id: string
	title: string
	description: string
	photo: string
	alt: string
	text: string
	name: string
	data: string
	likesCount: number
	commentStatus: boolean
	direction: string
}

export type PostsPageType = {
	posts: Array<PostType>
}
export type PostsPageActionType = {}

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
};

const postReducer = (state: PostsPageType = initialState, action: PostsPageActionType) => {
	return state;
}

export default postReducer;
