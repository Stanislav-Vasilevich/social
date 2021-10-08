import {state, changeDialogsMessage, addMessage, addMessageByEnter, subscriber, GlobalStateType} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {menuItemsType} from "./components/Menu/Menu";

export type menuDataType = {
  header: Array<menuItemsType>
  page: Array<menuItemsType>
}

const menuData: menuDataType = {
  header: [
    {id: 1, item: 'Главная', path: '/publications'},
    {id: 2, item: 'Друзья', path: '/friends'},
    {id: 3, item: 'Watch', path: '/watch'},
    {id: 4, item: 'Группы', path: '/group'},
    {id: 5, item: 'Игры', path: '/games'}
  ],
  page: [
    {id: 1, item: 'Публикации', path: '/publications'},
    {id: 2, item: 'Информация', path: '/information'},
    {id: 3, item: 'Друзья', path: '/friends'},
    {id: 4, item: 'Фото', path: '/photo'},
    {id: 5, item: 'Архив историй', path: '/stories'},
    {id: 6, item: 'Видео', path: '/video'},
    {id: 7, item: 'Еще', path: '/else'}
  ]
}

export const rerender = (state: GlobalStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             changeDialogsMessage={changeDialogsMessage}
             addMessage={addMessage}
             addMessageByEnter={addMessageByEnter}
             menuData = {menuData}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(state);

subscriber(rerender);
