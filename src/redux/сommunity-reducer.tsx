import {v1} from 'uuid';

const CHANGE_DIALOGS_MESSAGE = 'CHANGE-DIALOGS-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_BY_ENTER = 'ADD-MESSAGE-BY-ENTER';

export type CommunityPageNavigationType = {
  id: string
  item: string
  path: string
}
type CommunityDataType = {
  id: string
  name: string
  img: string
}
type DialogsDataType = {
  id: string
  message: string
}
export type CommunityPageType = {
  navigation: Array<CommunityPageNavigationType>
  persons: Array<CommunityDataType>
  valueMessage: string
  dialogs: Array<DialogsDataType>
}
export type CommunityPageActionsType =
  ReturnType<typeof changeDialogsMessageAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof addMessageByEnterAC>

const initialState: CommunityPageType = {
  navigation: [
		{id: v1(), item: 'Форум', path: '/community/forum'},
    {id: v1(), item: 'Друзья', path: '/community/friends'},
		{id: v1(), item: 'Поддержка', path: '/community/support'},
  ],
  persons: [
    {id: v1(), name: 'Настя', img: 'https://avatarko.ru/img/kartinka/16/Joker_minion_15661.jpg'},
    {id: v1(), name: 'Паша', img: 'https://klike.net/uploads/posts/2018-06/1528369868_15.jpg'},
    {id: v1(), name: 'Вова', img: 'https://coolsen.ru/wp-content/uploads/2021/09/78.jpg'}
  ],
  valueMessage: 'Как твои дела бро, а?',
  dialogs: [
    {id: v1(), message: 'Hello! How are you?'},
    {id: v1(), message: 'Hey! I`m work, I`m find!'},
    {id: v1(), message: 'It`s good))'},
  ],
}

export const communityReducer = (state: CommunityPageType = initialState, action: CommunityPageActionsType) => {
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
