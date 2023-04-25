export type CodePageType = {
	text: string
	skills: string
}
export type CodePageActionType = {}

const initialState = {
	text: 'Страница по верстке и программированию',
	skills: 'Слепая печать',
};

const codeReducer = (state: CodePageType = initialState, action: CodePageActionType) => {
	return state;
}

export default codeReducer;
