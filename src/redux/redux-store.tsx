import {combineReducers, createStore} from 'redux';
import headerReducer from './header-reducer';
import authorReducer from './author-reducer';
import motivationReducer from "./motivation-reducer";
import sportReducer from "./sport-reducer";
import codeReducer from "./code-reducer";
import investingReducer from "./investing-reducer";
import mainReducer from "./main-reducer";
import {communityReducer} from "./сommunity-reducer";
import {publicationsReducer} from "./publications-reducer";

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

// блоки сайта
const reducers = combineReducers({
	// шапка сайта
  header: headerReducer,
	// pages and menu
	mainPage: mainReducer,
	motivationPage: motivationReducer,
	sportPage: sportReducer,
	codePage: codeReducer,
	investingPage: investingReducer,
	communityPage: communityReducer,
  authorPage: authorReducer,
	// подменю
  publicationsPage: publicationsReducer,
});

const store = createStore(reducers);

export default store;
