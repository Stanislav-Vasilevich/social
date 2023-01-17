const CHANGE_DESCRIPTION = 'CHANGE-DESCRIPTION';

export type AuthorPageType = {
	background: string
	altBackground: string
	avatar: string
	name: string
	description: Array<string>
}
type StateType = {
	background: string
	altBackground: string
	avatar: string
	name: string
	description: Array<string>
}
export type AuthorPageActionsType = ReturnType<typeof changeDescriptionAC>

const initialState: StateType = {
	background: 'https://img.geliophoto.com/parkkrasnodar/01_parkkrasnodar.jpg',
	altBackground: 'г.Краснодар',
	avatar: 'https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg',
	name: 'Станислав Василевич',
	description: [
		'Действующий frontend-разработчик сайтов и веб-приложений. Стек технологий: CSS, HTML, JavaScript и React.',
		'Инвестор.',
		'Занимаюсь бегом и силовыми тренировками.'
	],
}

const authorReducer = (state: AuthorPageType = initialState, action: AuthorPageActionsType) => {
	if (action.type === CHANGE_DESCRIPTION) {

	}

	return state;
}

export const changeDescriptionAC = (text: string) => {
	return {
		type: CHANGE_DESCRIPTION,
		newText: text
	}
}

export default authorReducer;
