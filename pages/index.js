import styles from '../styles/Home.module.css';
import Items from '../components/Items';
import React from 'react';

export default function Home() {
  return (
    // <div className={isPcScreen ? styles.pc_container : styles.sp_container}>
    <>
      <Items />
    </>
  );
}
