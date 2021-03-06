import React from 'react';
import styles from '../styles/Footer.module.css';
import MediaQuery from 'react-responsive';

export default function Footer() {
  return (
    <>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.copyright}>Copyright © nogistore All Rights Reserved.</div>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_copyright}>Copyright © nogistore All Rights Reserved.</div>
      </MediaQuery>
    </>
  );
}
