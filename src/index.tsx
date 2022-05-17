import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import {StoreType} from './redux/store';

export const rerender = (state: StoreType) => {
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
