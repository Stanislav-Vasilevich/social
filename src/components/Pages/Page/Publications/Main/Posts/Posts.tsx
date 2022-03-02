import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import {ActionsType, PostsType} from "../../../../../../redux/store";

const {section} = styles;

type PropsType = {
  data: Array<PostsType>
  dispatch: (action: ActionsType) => void
}

function Posts(props: PropsType) {
  const showPosts = props.data.map(p => {
    return (
      <Post
        key={p.id}
        id={p.id}
        title={p.title}
        text={p.text}
        avatar={p.avatar}
        likesCount={p.likesCount}
        dispatch={props.dispatch}
      />
    )
  });

  return (
    <div className={section}>
      {showPosts}
    </div>
  )
}

export default Posts;
