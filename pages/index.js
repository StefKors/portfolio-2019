import Head from '../components/Head'
import Animation from "../components/Animation/Animation";
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

  handleClick = (value) => {
    console.log('img', value);
    this.setState({
      folder: null
    });


    this.setState({
      folder: value
    });
  }

  render() {
    return (
      <div className={styles.page}>
      <Head title='Stef Kors' url="https://www.stefkors.nl" />
      <div className={styles.page_wrapper}>
        <Vertical className={styles.social} />
        <Introduction className={styles.introduction}/>
        <List onitemClick={this.handleClick} className={styles.list}/>
      </div>


      <Animation 
        imageFolder={this.state.folder}
      />
    </div>
    );
  }
}

export default Index;
