export type MotivationPageType = {
	text: string
}
export type MotivationPageActionType = {}

const initialState = {
	text: 'Страница мотивации',
};

const motivationReducer = (state: MotivationPageType = initialState, action: MotivationPageActionType) => {
	return state;
}

export default motivationReducer;
