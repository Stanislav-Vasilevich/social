import {v1} from "uuid";
import {ActionsType, PublicationsPageType} from "./store";

const ADD_POST = 'ADD_POST';
const CHANGE_ADD_POST_TITLE = 'CHANGE_ADD_POST_TITLE';
const CHANGE_ADD_POST_TEXT = 'CHANGE_ADD_POST_TEXT';

export const publicationsReducer = (state: PublicationsPageType, action: ActionsType) => {
  switch (action.type) {
    case CHANGE_ADD_POST_TITLE:
      state.addingPost.valueTitle = action.message;

      return state;

    case CHANGE_ADD_POST_TEXT:
      state.addingPost.valueText = action.message;

      return state;

    case ADD_POST:
      const newPost = {
        id: v1(),
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
        title: state.addingPost.valueTitle,
        text: state.addingPost.valueText,
        likesCount: 0
      };

      state.addingPost.valueText = '';
      state.addingPost.valueTitle = '';

      state.posts.unshift(newPost);

      return state;

    default:
      return state;
  }
}

export const changeAddPostTitleAC = (message: string) => {
  return {type: CHANGE_ADD_POST_TITLE, message: message} as const
}

export const changeAddPostTextAC = (message: string) => {
  return {type: CHANGE_ADD_POST_TEXT, message: message} as const
}

export const addPostAC = () => {
  return {type: ADD_POST} as const
}