import React from "react";
import styles from "./AddPost.module.css";

const {section, avatar, textArea, btn} = styles;

function AddPost() {
  return (
    <div className={section}>
      <img className={avatar} src={'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'}></img>
      <input className={textArea} type="text" />
      <button className={btn}>Отправить</button>
    </div>
  )
}

export default AddPost;