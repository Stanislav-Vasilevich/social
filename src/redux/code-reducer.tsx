export type CodePageType = {
	text: string
}
export type CodePageActionType = {}

const initialState = {
	text: 'Страница по верстке и программированию',
};

const codeReducer = (state: CodePageType = initialState, action: CodePageActionType) => {
	return state;
}

export default codeReducer;
