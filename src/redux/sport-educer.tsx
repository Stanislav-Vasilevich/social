export type SportPageType = {
	text: string
}
export type SportPageActionType = {}

const initialState = {
	text: 'Страница о спорте',
};

const sportReducer = (state: SportPageType = initialState, action: SportPageActionType) => {
	return state;
}

export default sportReducer;
