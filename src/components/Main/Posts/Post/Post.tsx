import React from "react";
import styles from "./Post.module.css";

const {section, avatar, text} = styles;

function Post() {
  return (
    <div className={section}>
      <img className={avatar} src={'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'}></img>
      <p className={text}>Текст</p>
    </div>
  )
}

export default Post;