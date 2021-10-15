import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/state';

export const rerender = () => {
  const state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.rerender();

store.subscriber(rerender);
