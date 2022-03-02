import React from 'react';
import styles from './Post.module.css';
import {ActionsType} from "../../../../../../../redux/store";

type PostPropsType = {
  id: string
  avatar: string
  title: string
  text: string
  likesCount: number
  dispatch: (action: ActionsType) => void
}

const Post = (props: PostPropsType) => {
  return (
    <div className={styles.section}>
      <img className={styles.avatar} src={props.avatar} alt={''}/>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <span className={styles.likesHand} onClick={() => console.log('hello')}>&#128077;</span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;
