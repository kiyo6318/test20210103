import React from 'react';
import styles from '../styles/Footer.module.css';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
  const isPcScreen = useMediaQuery({
    query: '(min-device-width: 767px)',
  });

  return (
    <div className={isPcScreen ? styles.copyright : styles.sp_copyright}>
      Copyright © nogistore All Rights Reserved.
    </div>
  );
}
