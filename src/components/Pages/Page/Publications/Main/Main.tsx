import React from 'react';
import styles from './Main.module.css';
import Posts from './Posts/Posts';
import {PublicationsPageType} from '../../../../../redux/publications-reducer';
import {ActionsType} from '../../../../../index';
import AddPostContainer from './AddPost/AddPostContainer';

type PropsType = {
  mainContent: PublicationsPageType
  dispatch: (action: ActionsType) => void
}

export function Main(props: PropsType) {
  return (
    <section className={styles.main}>
      <AddPostContainer
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
