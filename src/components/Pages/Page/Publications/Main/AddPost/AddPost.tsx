import React, {createRef} from 'react';
import styles from './AddPost.module.css';

const {section, avatar, textArea, btn} = styles;

const AddPost = () => {
  const textAreaElement = createRef<HTMLTextAreaElement>();

  const addPostHandler = () => {
    const text = textAreaElement.current?.value;
    console.log(text);
  }

  return (
    <div className={section}>
      <img className={avatar}
           src={'https://s.starladder.com/uploads/user_logo/b/f/2/d/meta_tag_d6ca03e719804347cb71d8338d5bce5a.jpg'}
           alt={''}></img>
      <textarea className={textArea} ref={textAreaElement}/>
      <button className={btn} onClick={addPostHandler}>Отправить</button>
    </div>
  )
}

export default AddPost;
