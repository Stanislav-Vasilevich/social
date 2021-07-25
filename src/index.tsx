import {state, changeDialogsMessage, addMessage, addMessageByEnter, subscriber, GlobalStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerender = (state: GlobalStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             changeDialogsMessage={changeDialogsMessage}
             addMessage={addMessage}
             addMessageByEnter={addMessageByEnter}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(state);

subscriber(rerender);
