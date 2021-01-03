import React, {ReactNode} from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        <img className={styles.logo} src="/images/nogi-store-logo.svg" />
        <div className={styles.external}>
          <img className={styles.instagram} src="/images/instagram-icon.svg" />
          <img className={styles.facebook} src="/images/facebook-icon.svg" />
          <img className={styles.email} src="/images/email-icon.svg" />
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.nav_link}>
          top
        </Link>
        <Link href="/" className={styles.nav_link}>
          nogi store
        </Link>
        <Link href="/" className={styles.nav_link}>
          contact
        </Link>
      </nav>
    </div>
  )
}