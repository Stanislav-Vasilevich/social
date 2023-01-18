export type InvestingPageType = {
	text: string
}
export type InvestingPageActionType = {}

const initialState = {
	text: 'Страница об инвестировании',
};

const investingReducer = (state: InvestingPageType = initialState, action: InvestingPageActionType) => {
	return state;
}

export default investingReducer;
