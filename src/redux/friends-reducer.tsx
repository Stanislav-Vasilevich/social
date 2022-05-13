import {v1} from "uuid";
import {ActionsType, DialogsDataType, FriendsPageType} from "./store";

const CHANGE_DIALOGS_MESSAGE = 'CHANGE-DIALOGS-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_BY_ENTER = 'ADD-MESSAGE-BY-ENTER';

const initialState = {
  persons: [
    {id: v1(), name: 'Катя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
    {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
    {id: v1(), name: 'Вова', img: 'https://pbs.twimg.com/media/Ce43PAzW4AA_g9g.jpg'}
  ],
  valueMessage: 'Как твои дела бро?',
  dialogs: [
    {id: v1(), message: 'Hello! How are you?'},
    {id: v1(), message: 'Hey! I`m work, I`m find!'},
    {id: v1(), message: 'It`s good))'},
  ],
}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionsType) => {
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
