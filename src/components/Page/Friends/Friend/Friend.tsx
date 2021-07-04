import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Friend.module.css";

const {main, friend, active} = styles;

type FriendPropsType = {
  id: number
  img: string
  name: string
}

const Friend: React.FC<FriendPropsType> = ({id, name, img }) => {
  return (
    <section className={main}>
      <NavLink className={friend} activeClassName={active} to={`/friends/${id}`}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </NavLink>
    </section>
  )
}

export default Friend;