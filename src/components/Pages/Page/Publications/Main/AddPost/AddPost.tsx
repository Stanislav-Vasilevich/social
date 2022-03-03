import React, {ChangeEvent} from 'react';
import styles from './AddPost.module.css';
import {ActionsType, AddingPostType} from "../../../../../../redux/store";
import {addPostAC, changeAddPostTextAC, changeAddPostTitleAC} from "../../../../../../redux/publications-reducer";

type PropsType = {
  addingPost: AddingPostType
  dispatch: (action: ActionsType) => void
}

const AddPost = (props: PropsType) => {
  const changeAddPostTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(changeAddPostTitleAC(e.currentTarget.value));
  }

  const changeAddPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeAddPostTextAC(e.currentTarget.value));
  }

  const addPostHandler = () => {
    props.dispatch(addPostAC());
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
