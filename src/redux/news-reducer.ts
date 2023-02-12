export type NewsPageType = {
	name: string
	data: string
	title: string
	text: string
	photo: string
	alt: string
	likesCount: number
	description: string
}
export type NewsPageActionType = {}

const initialState = {
	name: 'Станислав Василевич',
	data: '12.08.2021',
	title: 'Поездка в Геленджик',
	text: 'Эта поездка была мега интересной. Всё началось 8 июня 2023 года, когда прозвинел будильник в 6 утра и на моё удивление я подорвался как ....',
	photo: 'https://funart.pro/uploads/posts/2021-03/1617192695_3-p-oboi-abkhaziya-gelendzhik-3.jpg',
	alt: 'Геленджик',
	likesCount: 4,
	description: 'Едем в Геленджик, ранний подъем, поезд, прибытие, съем жилья, экскурсия по набережной и по местным достопримечательностям',
};

const newsReducer = (state: NewsPageType = initialState, action: NewsPageActionType) => {
	return state;
}

export default newsReducer;
