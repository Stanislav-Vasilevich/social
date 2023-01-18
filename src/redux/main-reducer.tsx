export type MainPageType = {
	text: string
	title: string
}
export type MainPageActionType = {}

const initialState = {
	text: 'Главная страница.',
	title: 'Блог для тех, кто хочет стать сильной личностью.',
};

const mainReducer = (state: MainPageType = initialState, action: MainPageActionType) => {
	return state;
}

export default mainReducer;
