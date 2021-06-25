import React from "react";
import styles from './Main.module.css';

// деструктуризация CSS
const {main, info} = styles;

export function Main() {
  return (
    <main className={main}>
      <p className={info}>главный контент</p>
    </main>
  )
}