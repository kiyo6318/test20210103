import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProjectList.module.css';

const projects = ({ projects }) => {
  const mapped = projects.map((project) => {
    return project;
  });

  mapped.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return 1;
    } else if (a.createdAt < b.createdAt) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <div className={styles.title}>project list</div>
      <div className={styles.wrapper}>
        {mapped.map((project) => (
          <React.Fragment key={project.id}>
            <Link href="/projects/[id]" as={`projects/${project.id}`}>
              <a>
                <div className={styles.container_ja}>
                  <span>{project.title_ja}</span>
                  {' | '}
                  <span>{project.year}</span>
                  {' | '}
                  <span>{project.category_ja}</span>
                  {' | '}
                  <span>{project.author}</span>
                </div>
                <div className={styles.container_en}>
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
