import React, {ChangeEvent} from 'react';
import styles from './AddPost.module.css';
import {AddingPostType} from '../../../../../../redux/publications-reducer';

type PropsType = {
  changeAddPostTitle: (text: string) => void
  changeAddPostText: (text: string) => void
  addPost: () => void
  addingPost: AddingPostType
}

const AddPost = (props: PropsType) => {
  const changeAddPostTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeAddPostTitle(e.currentTarget.value);
  }

  const changeAddPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeAddPostText(e.currentTarget.value);
  }

  const addPostHandler = () => {
    props.addPost();
  }

  return (
    <div className={styles.section}>
      <img className={styles.avatar} src={props.addingPost.avatar} alt={props.addingPost.name}/>
      <div>
        <input className={styles.input}
               onChange={changeAddPostTitleHandler}
               type="text"
               placeholder={'заголовок'}
               value={props.addingPost.valueTitle}
        />
        <textarea className={styles.textArea}
                  onChange={changeAddPostTextHandler}
                  placeholder={'текст..'}
                  value={props.addingPost.valueText}
        />
        <div className={styles.row}>
          <button className={styles.btn} onClick={addPostHandler}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost;
