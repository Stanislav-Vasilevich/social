import React from "react";
import styles from "./Post.module.css";

const {section, avatar, text} = styles;

type PostPropsType = {
  id: number
  title: string,
  img: string
}

const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={section}>
      <img className={avatar} src={props.img}></img>
      <p className={text}>{props.title}</p>
    </div>
  )
}

export default Post;