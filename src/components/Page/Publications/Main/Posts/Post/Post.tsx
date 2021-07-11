import React from "react";
import styles from "./Post.module.css";

console.log(styles)

const {section, avatar, text, likes, likesHand} = styles;

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