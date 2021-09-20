import React from 'react';
import styles from './Post.module.css';

const {section, avatar, text, likesHand} = styles;

type PostPropsType = {
  id: number
  title: string,
  img: string
  likesCount: number
  changeLikesCount: (id: number) => void
}

const Post: React.FC<PostPropsType> = (props) => {
  const addLike = () => {
    props.changeLikesCount(props.id);
  }

  return (
    <div className={section}>
      <img className={avatar} src={props.img} alt={''}/>
      <div>
        <p className={text}>{props.title}</p>
        <span className={likesHand} onClick={addLike}>&#128077;</span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;
