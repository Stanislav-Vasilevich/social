import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {publicationsReducer} from './publications-reducer';

type ReducersType = typeof reducers;
type AppStateType = ReturnType<ReducersType>;

const reducers = combineReducers({
  friendsPage: friendsReducer,
  publicationsPage: publicationsReducer
});

const store = createStore(reducers);

export default store;
