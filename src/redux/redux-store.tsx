import {combineReducers, createStore} from 'redux';
// import {publicationsReducer} from './publications-reducer';
import headerReducer from './header-reducer';
import authorReducer from './author-reducer';
import newsReducer from './news-reducer';
import motivationReducer from "./motivation-reducer";
import sportReducer from "./sport-reducer";
import codeReducer from "./code-reducer";
import investingReducer from "./investing-reducer";
import mainReducer from "./main-reducer";
import {communityReducer} from "./сommunity-reducer";
import postReducer from './post-reducer';

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

// блоки сайта
const reducers = combineReducers({
	// шапка сайта
  header: headerReducer,
	// pages and menu
	mainPage: mainReducer,
	newsPage: newsReducer,
	motivationPage: motivationReducer,
	sportPage: sportReducer,
	codePage: codeReducer,
	investingPage: investingReducer,
	communityPage: communityReducer,
  authorPage: authorReducer,
	// подменю
  // publicationsPage: publicationsReducer,
	// post
	posts: postReducer
});

const store = createStore(reducers);

export default store;
