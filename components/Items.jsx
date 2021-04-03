import styles from '../styles/Items.module.css';
import Link from 'next/link';
import MediaQuery from 'react-responsive';

export default function Items() {
  return (
    <div>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.pc_container}>
          <div className={styles.div1}>
            <img src="/images/001.png" />
          </div>
          <div className={styles.div2}>
            <img src="/images/002.png" />
          </div>
          <div className={styles.div3}>
            <img src="/images/003.png" />
          </div>
          <div className={styles.div4}>
            <Link href="/projects">
              <a>
                <img src="/images/004.png" />
              </a>
            </Link>
          </div>
          <div className={styles.div5}>
            <img src="/images/006.png" />
          </div>
          <div className={styles.div6}>
            <img src="/images/007.png" />
          </div>
          <div className={styles.div7}>
            <Link href="/contact">
              <a>
                <img src="/images/009.png" />
              </a>
            </Link>
          </div>
          <div className={styles.div8}>
            <img src="/images/005.png" />
          </div>
          <div className={styles.div9}>
            <img src="/images/008.png" />
          </div>
          <div className={styles.div10 + ' ' + styles.project_list}>
            <Link href="/projects">
              <a>project list</a>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_container}>
          <div className={styles.div1}>
            <img src="/images/001.png" />
          </div>
          <div className={styles.div2}>
            <img src="/images/002.png" />
          </div>
          <div className={styles.div3}>
            <img src="/images/003.png" />
          </div>
          <div className={styles.div4}>
            <Link href="/projects">
              <a>
                <img src="/images/004.png" />
              </a>
            </Link>
          </div>
          <div className={styles.div5}>
            <img src="/images/006.png" />
          </div>
          <div className={styles.div6}>
            <img src="/images/007.png" />
          </div>
          <div className={styles.div7}>
            <Link href="/contact">
              <a>
                <img src="/images/009.png" />
              </a>
            </Link>
          </div>
          <div className={styles.div8}>
            <img src="/images/005.png" />
          </div>
          <div className={styles.div9}>
            <img src="/images/008.png" />
          </div>
          <div className={styles.div10 + ' ' + styles.project_list}>
            <Link href="/projects">
              <a>project list</a>
            </Link>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
