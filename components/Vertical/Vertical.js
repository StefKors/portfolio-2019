import styles from "./Vertical.module.css";

const Introduction = props => (
  <div className={styles.vertical}>
    <div className={styles.links}>
      <a href=" https://twitter.com/stef_kors">twitter</a>
      <a href="mailto:stef.kors+website@gmail.com">email</a>
      <a href="https://www.linkedin.com/in/stefkors/">linkedin</a>
    </div>
  </div>
);

export default Introduction;
