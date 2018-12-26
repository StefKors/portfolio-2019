import styles from "./ListItem.css";

const ListItem = props => (
  <div key={props.data.Number} className={styles.project}>
    <h1 className={styles.title}>{props.data.Project}</h1>
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p>{props.data.Description}</p>
      </div>
      <div className={styles.card}>
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>
  </div>
);

export default ListItem;
