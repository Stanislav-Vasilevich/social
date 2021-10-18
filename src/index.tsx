import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/state';

export const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscriber(rerender);
store.rerender();
