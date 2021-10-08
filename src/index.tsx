import {state, changeDialogsMessage, addMessage, addMessageByEnter, subscriber, GlobalStateType} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {menuItemsType} from "./components/Menu/Menu";

export const menuItems: Array<menuItemsType> = [
  {id: 1, item: 'Главная', path: '/publications'},
  {id: 2, item: 'Друзья', path: '/friends'},
  {id: 3, item: 'Watch', path: '/watch'},
  {id: 4, item: 'Группы', path: '/group'},
  {id: 5, item: 'Игры', path: '/games'}
];

export const rerender = (state: GlobalStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             changeDialogsMessage={changeDialogsMessage}
             addMessage={addMessage}
             addMessageByEnter={addMessageByEnter}
             menuItems = {menuItems}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(state);

subscriber(rerender);
