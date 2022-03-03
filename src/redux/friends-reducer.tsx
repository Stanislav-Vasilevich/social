import {v1} from "uuid";
import {ActionsType, DialogsDataType, FriendsPageType} from "./store";

const CHANGE_DIALOGS_MESSAGE = 'CHANGE-DIALOGS-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_BY_ENTER = 'ADD-MESSAGE-BY-ENTER';

export const friendsReducer = (state: FriendsPageType, action: ActionsType) => {
  switch (action.type) {
    case CHANGE_DIALOGS_MESSAGE:
      state.valueMessage = action.message;

      return state;

    case ADD_MESSAGE:
      const newMessage: DialogsDataType = {
        id: v1(),
        message: state.valueMessage
      };

      state.dialogs.push(newMessage);
      state.valueMessage = '';

      return state;

    case ADD_MESSAGE_BY_ENTER:
      const newMessageByEnter: DialogsDataType = {
        id: v1(),
        message: state.valueMessage
      };

      state.dialogs.push(newMessageByEnter);
      state.valueMessage = '';
      return state;

    default:
      return state;
  }
}

export const changeDialogsMessageAC = (text: string) => {
  return {type: CHANGE_DIALOGS_MESSAGE, message: text} as const
}

export const addMessageAC = () => {
  return {type: ADD_MESSAGE} as const
}

export const addMessageByEnterAC = () => {
  return {type: ADD_MESSAGE_BY_ENTER} as const
}