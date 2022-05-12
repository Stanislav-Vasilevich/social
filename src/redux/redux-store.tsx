import {combineReducers, createStore} from 'redux';
import {friendsReducer} from './friends-reducer';
import {publicationsReducer} from './publications-reducer';

const reducers = combineReducers({
  friends: friendsReducer,
  publications: publicationsReducer
})

const store = createStore(reducers);

export default store;
