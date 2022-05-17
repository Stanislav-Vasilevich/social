import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {publicationsReducer} from './publications-reducer';
import headerReducer from './header-reducer';
import authorReducer from './author-reducer';
import newsReducer from './news-reducer';

type ReducersType = typeof reducers;
type AppStateType = ReturnType<ReducersType>;

const reducers = combineReducers({
  header: headerReducer,
  author: authorReducer,
  news: newsReducer,
  friendsPage: friendsReducer,
  publicationsPage: publicationsReducer
});

const store = createStore(reducers);

export default store;
