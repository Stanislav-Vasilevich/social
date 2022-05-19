import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store, {AppStateType} from './redux/redux-store';
import {FriendsPageActionsType} from './redux/friends-reducer';
import {PublicationPageActionType} from './redux/publications-reducer';

export type ActionsType = PublicationPageActionType | FriendsPageActionsType;

export const rerender = (state: AppStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
