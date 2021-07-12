import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Friend.module.css";
import {friendDataType} from "../../../../redux/state";

const {main, friend, active} = styles;

const Friend = (props: friendDataType) => {
  return (
    <section className={main}>
      <NavLink className={friend} activeClassName={active} to={`/friends/${props.id}`}>
        <img src={props.state.friends.img} alt={props.name} />
        <h2>{props.name}</h2>
      </NavLink>
    </section>
  )
}

export default Friend;