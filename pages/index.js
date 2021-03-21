import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Items from '../components/Items';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

export default function Home() {
  return (
    // <div className={isPcScreen ? styles.pc_container : styles.sp_container}>
    <>
      <Head>
        <title>nogi store</title>
      </Head>
      <Items />
    </>
  );
}
