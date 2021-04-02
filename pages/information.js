import React from 'react';
import styles from '../styles/Information.module.css';
import MediaQuery from 'react-responsive';

const key = {
  headers: { 'X-API-KEY': process.env.API_KEY },
};

const Information = ({ information }) => {
  const informationBody = () => {
    return { __html: information.body };
  };

  return (
    <>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.body} dangerouslySetInnerHTML={informationBody()} />
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_body} dangerouslySetInnerHTML={informationBody()} />
      </MediaQuery>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://nogi-store.microcms.io/api/v1/information`, key);
  const information = await res.json();

  return {
    props: {
      information: information,
    },
  };
};

export default Information;
