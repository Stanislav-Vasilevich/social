import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, GlobalStateType, changeDialogsMessage, addMessageByEnter} from "./redux/state";

export const rerender = (state: GlobalStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} changeDialogsMessage={changeDialogsMessage} addMessage={addMessage} addMessageByEnter={addMessageByEnter}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
