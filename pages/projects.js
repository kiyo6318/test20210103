import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProjectList.module.css';
import MediaQuery from 'react-responsive';

const projects = ({ projects }) => {
  const mapped = projects.map((project) => {
    return project;
  });

  return (
    <>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.title}>project list</div>
        <div className={styles.wrapper}>
          {mapped.map((project) => (
            <React.Fragment key={project.id}>
              <div className={styles.container_ja}>
                <Link href="/projects/[id]" as={`projects/${project.id}`}>
                  <a>
                    <span>{project.title_ja}</span>
                    {' | '}
                    <span>{project.year}</span>
                    {' | '}
                    <span>{project.category_ja}</span>
                    {' | '}
                    <span>{project.author}</span>
                  </a>
                </Link>
              </div>
              <div className={styles.container_en}>
                <Link href="/projects/[id]" as={`projects/${project.id}`}>
                  <a>
                    <span>{project.title_en}</span>
                    {' | '}
                    <span>{project.year}</span>
                    {' | '}
                    <span>{project.category_en}</span>
                    {' | '}
                    <span>{project.author}</span>
                  </a>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_title}>project list</div>
        <div className={styles.sp_wrapper}>
          {mapped.map((project) => (
            <React.Fragment key={project.id}>
              <Link href="/projects/[id]" as={`projects/${project.id}`}>
                <a>
                  <div className={styles.sp_container_ja}>
                    <span>{project.title_ja}</span>
                    {' | '}
                    <span>{project.year}</span>
                    {' | '}
                    <span>{project.category_ja}</span>
                    {' | '}
                    <span>{project.author}</span>
                  </div>
                  <div className={styles.sp_container_en}>
                    <span>{project.title_en}</span>
                    {' | '}
                    <span>{project.year}</span>
                    {' | '}
                    <span>{project.category_en}</span>
                    {' | '}
                    <span>{project.author}</span>
                  </div>
                </a>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </MediaQuery>
    </>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const res = await fetch(`https://nogi-store.microcms.io/api/v1/projects/`, key);
  const data = await res.json();

  return {
    props: {
      projects: data.contents,
    },
  };
};

export default projects;
