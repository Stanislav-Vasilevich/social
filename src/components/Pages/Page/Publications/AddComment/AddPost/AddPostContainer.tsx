import React, {ChangeEvent} from 'react';
import styles from './AddPost.module.css';
import {
  AddingPostType,
  addPostAC,
  changeAddPostTextAC,
  changeAddPostTitleAC
} from '../../../../../../redux/publications-reducer';
import {ActionsType} from '../../../../../../index';
import AddPost from './AddPost';

type PropsType = {
  addingPost: AddingPostType
  dispatch: (action: ActionsType) => void
}

const AddPostContainer = (props: PropsType) => {
  const changeAddPostTitle = (text: string) => {
    props.dispatch(changeAddPostTitleAC(text));
  }

  const changeAddPostText = (text: string) => {
    props.dispatch(changeAddPostTextAC(text));
  }

  const addPost = () => {
    props.dispatch(addPostAC());
  }

  return <AddPost
    changeAddPostTitle={changeAddPostTitle}
    changeAddPostText={changeAddPostText}
    addPost={addPost}
    addingPost={props.addingPost}
  />
}

export default AddPostContainer;
