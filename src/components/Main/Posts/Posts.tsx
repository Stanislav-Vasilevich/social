import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

const {section} = styles;

function Posts() {
  return (
    <div className={section}>
      <Post title={"Аффирмация на каждый день"} img={"https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300"} />
      <Post title={"Программирование на javascript"} img={"https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg"} />
      <Post title={"Обучение финансовой грамотности"} img={"https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj"} />
      <Post title={"Поездка на Бали"} img={"https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo"} />
    </div>
  )
}

export default Posts;