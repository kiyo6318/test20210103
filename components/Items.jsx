import styles from '../styles/Items.module.css';
import Link from 'next/link';
import MediaQuery from 'react-responsive';

export default function Items() {
  return (
    <div>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.pc_container}>
          <div className={styles.div1}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div2}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div3}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div4}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div5}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div6}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div7}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div8}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div9}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div10 + ' ' + styles.project_list}>
            <Link href="/projects">project list</Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_container}>
          <div className={styles.div1}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div2}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div3}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div4}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div5}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div6}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div7}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div8}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div9}>
            <img src="/images/under_construction.png" />
          </div>
          <div className={styles.div10 + ' ' + styles.project_list}>
            <Link href="/projects">project list</Link>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
