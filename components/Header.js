import React, {ReactNode} from 'react'
import Link from 'next/link'
import Logo from '../public/images/logo.svg';
import styles from '../styles/Header.module.css'
import Facebook from '../public/images/facebook-icon.svg'
import Instagram from '../public/images/instagram-icon.svg'
import Email from '../public/images/email-icon.svg'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        {/* <Logo className={styles.logo}/> */}
        <div className={styles.external}>
          {/* <Instagram className={styles.instagram} /> */}
          {/* <Facebook className={styles.facebook} /> */}
          {/* <Email className={styles.email} /> */}
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