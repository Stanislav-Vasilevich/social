import React from "react";
import styles from './Main.module.css';
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";

// деструктуризация CSS
const {main} = styles;

export function Main() {
  return (
    <main className={main}>
      <AddPost />
      <Posts />
    </main>
  )
}