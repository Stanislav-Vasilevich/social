import React, {useState} from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const {section} = styles;

function Posts() {
  type postDataType = {
    id: number
    title: string
    img: string
    likesCount: number
  }

  const [posts, setPosts] = useState<Array<postDataType>>([
    {
      id: 1,
      title: 'Аффирмация на каждый день и далее пошел целый сплошной текст, который приводит к каким-то последствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
      img: 'https://im0-tub-ru.yandex.net/i?id=70bde5566a6078f6bca01933fc2a412f&ref=rim&n=33&w=300&h=300',
      likesCount: 6
    },
    {
      id: 2,
      title: 'Программирование на javascript и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
      img: 'https://sun9-10.userapi.com/xMtkKxtrmIts_wJ8cOH_rhasMaGGftbw6m3XEg/mFWBoDS8ZjI.jpg',
      likesCount: 1
    },
    {
      id: 3,
      title: 'Обучение финансовой грамотности и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
      img: 'https://yt3.ggpht.com/ytc/AAUvwnjbnydVEHlADfNrG_bVJP6GvmlelF9MwZczb10h2g=s900-c-k-c0x00ffffff-no-rj',
      likesCount: 3
    },
    {
      id: 4,
      title: 'Поездка на Бали и далее пошел целый сплошной текст, который приводит к каким-то посдедствиям и заставляет нас применить свои усилия, чтобы понять, что тут вобще написано',
      img: 'https://yt3.ggpht.com/a/AATXAJzp71mv5MJ56d1-PrE7tL31GVRDbGP73QmS1Q=s900-c-k-c0xffffffff-no-rj-mo',
      likesCount: 2
    }
  ])

  const changeLikesCount = (likesId: number) => {
    const array = posts.map(p => {
      if (p.id === likesId) {
        console.log(p.likesCount + 1);
        return p.likesCount + 1;
      } else {
        return p;
      }
    })
    console.log(array);
  }

  const arrayPosts = posts.map(i => {
    return <Post
      key={i.id}
      id={i.id}
      title={i.title}
      img={i.img}
      likesCount={i.likesCount}
      changeLikesCount={changeLikesCount}
    />
  })

  return (
    <div className={section}>
      {arrayPosts}
    </div>
  )
}

export default Posts;
