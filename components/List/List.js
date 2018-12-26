import styles from './List.css';
import data from '../../data/db.json';
import ListItem from '../ListItem/ListItem'


const List = () => (
    <div className={styles.wrapper}>
      {data.map((post) => (
        <ListItem data={post}></ListItem>
      ))}
    </div>
)

export default List