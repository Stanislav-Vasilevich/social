import React from "react";
import styles from "./Post.module.css";

const {section, avatar, text, likesHand} = styles;

type PostPropsType = {
  id: number
  title: string,
  img: string
  likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={section}>
      <img className={avatar} src={props.img}></img>
      <div>
        <p className={text}>{props.title}</p>
        <span className={likesHand}>&#128077;</span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;