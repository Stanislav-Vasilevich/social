import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const {section} = styles;

function Posts() {
  return (
    <div className={section}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts;