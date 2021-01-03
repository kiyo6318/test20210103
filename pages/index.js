import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Items from '../components/Items'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nogi store</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Items/>
    </div>
  )
}
