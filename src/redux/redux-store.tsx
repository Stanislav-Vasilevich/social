import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {publicationsReducer} from './publications-reducer';
import headerReducer from './header-reducer';
import authorReducer from './author-reducer';
import newsReducer from './news-reducer';
import motivationReducer from "./motivation-reducer";
import sportReducer from "./sport-educer";
import codeReducer from "./code-reducer";
import investingReducer from "./investing-reducer";
import mainReducer from "./main-reducer";

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

// блоки сайта
const reducers = combineReducers({
	// шапка сайта
  header: headerReducer,
	// меню
	main: mainReducer,
	motivation: motivationReducer,
	sport: sportReducer,
	code: codeReducer,
	investing: investingReducer,
	friendsPage: friendsReducer,
  author: authorReducer,
	// подменю
  news: newsReducer,
  publicationsPage: publicationsReducer
});

const store = createStore(reducers);

export default store;
