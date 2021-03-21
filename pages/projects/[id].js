import styles from '../../styles/ProjectDetail.module.css';

const ProjectId = ({ project }) => {
  return (
    <div className={styles.pc_container}>
      <div className={styles.title}>{project.title_ja}</div>
      <div className={styles.img}>
        <img src={project.image.url} alt="image" />
      </div>
      <p>{project.category_ja}</p>
      <p>{project.year}</p>
      <div className={styles.body}>{project.body}</div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch('https://nogi-store.microcms.io/api/v1/projects/', key);
  const repos = await res.json();

  const paths = repos.contents.map((repo) => `/projects/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch(`https://nogi-store.microcms.io/api/v1/projects/${id}`, key);
  const project = await res.json();

  return {
    props: {
      project: project,
    },
  };
};

export default ProjectId;
