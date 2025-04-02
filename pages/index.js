import Head from '../components/Head'
import Introduction from '../components/Introduction/Introduction'
import Vertical from '../components/Vertical/Vertical'
import List from '../components/List/List'
import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.page}>
      <Head title='Stef Kors 2019' url="https://2019.stefkors.nl" />
      <div className={styles.page_wrapper}>
        <Vertical className={styles.social} />
        <Introduction className={styles.introduction}/>
        <List className={styles.list}/>
      </div>
    </div>
  );
}
