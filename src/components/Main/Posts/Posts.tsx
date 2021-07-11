import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const {section} = styles;

function Posts() {
  type postDataType = {
    id: number
    title: string
    img: string
  }

  const postData: Array<postDataType> = [
    {id: 1, title:"Аффирмация на каждый день", img:"https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300" },
    {id: 2, title:"Программирование на javascript", img:"https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg"},
    {id: 3, title:"Обучение финансовой грамотности", img:"https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj"},
    {id: 4, title:"Поездка на Бали", img:"https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo"}
  ]

  return (
    <div className={section}>
      <Post id={postData[0].id} title={postData[0].title} img={postData[0].img} />
      <Post id={postData[1].id} title={postData[1].title} img={postData[1].img} />
      <Post id={postData[2].id} title={postData[2].title} img={postData[2].img} />
      <Post id={postData[3].id} title={postData[3].title} img={postData[3].img} />
    </div>
  )
}

export default Posts;