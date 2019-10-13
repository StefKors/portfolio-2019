import Head from '../components/Head'
import Introduction from '../components/Introduction/Introduction'
import Vertical from '../components/Vertical/Vertical'
import List from '../components/List/List'
import styles from "./index.css";



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className={styles.page}>
      <Head title='Stef Kors' url="https://www.stefkors.nl" />
      <div className={styles.page_wrapper}>
        <Vertical className={styles.social} />
        <Introduction className={styles.introduction}/>
        <List className={styles.list}/>
      </div>
    </div>
    );
  }
}

export default Index;
