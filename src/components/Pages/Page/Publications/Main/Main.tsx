import React from 'react';
import styles from './Main.module.css';
import AddPost from './AddPost/AddPost';
import Posts from './Posts/Posts';
import {ActionsType, PublicationsPageType} from "../../../../../redux/store";

type PropsType = {
  mainContent: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

export function Main(props: PropsType) {
  return (
    <section className={styles.main}>
      <AddPost
        addingPost={props.mainContent.addingPost}
        dispatch={props.dispatch}
      />
      <Posts
        data={props.mainContent.posts}
        dispatch={props.dispatch}
      />
    </section>
  )
}
