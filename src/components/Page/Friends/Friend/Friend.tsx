import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Friend.module.css";

const {main, friend, active} = styles;

const Friend: React.FC<any> = ({globalState}) => {
  return (
    <section className={main}>
      <NavLink className={friend} activeClassName={active} to={`/friends/${globalState.friendsPage.friends.id}`}>
        <img src={globalState.friendsPage.friends.img} alt={globalState.friendsPage.friends.name} />
        <h2>{globalState.friendsPage.friends.name}</h2>
      </NavLink>
    </section>
  )
}

export default Friend;
