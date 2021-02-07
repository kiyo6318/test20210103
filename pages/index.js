import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Items from '../components/Items';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isPcScreen = useMediaQuery({
    query: '(min-device-width: 767px)',
  });

  return (
    <div className={isPcScreen ? styles.pc_container : styles.sp_container}>
      <Head>
        <title>nogi store</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Items />
    </div>
  );
}
