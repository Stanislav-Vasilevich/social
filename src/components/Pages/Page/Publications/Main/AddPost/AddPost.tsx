import React, {ChangeEvent} from 'react';
import styles from './AddPost.module.css';
import {ActionsType, AddingPostType, addPostAC, changeAddPostMessageAC} from "../../../../../../redux/store";

type PropsType = {
  addingPost: AddingPostType
  dispatch: (action: ActionsType) => void
}

const AddPost = (props: PropsType) => {
  const changeAddPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeAddPostMessageAC(e.currentTarget.value));
  }

  const addPostHandler = () => {
    props.dispatch(addPostAC());
  }

  return (
    <div className={styles.section}>
      <img className={styles.avatar} src={props.addingPost.avatar} alt={props.addingPost.name}/>
      <div>
        <input className={styles.input}
               type="text"
               placeholder={'заголовок'}
        />
        <textarea className={styles.textArea}
                  value={props.addingPost.valueTextArea}
                  onChange={changeAddPostTextHandler}
                  placeholder={'текст..'}
        />
        <div className={styles.row}>
          <button className={styles.btn} onClick={addPostHandler}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost;
