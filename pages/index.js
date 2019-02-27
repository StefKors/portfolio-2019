import Header from '../components/Header/Header'
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
      folder: value
    });
  }

  render() {
    return (
      <div className={styles.page}>
      {/* <Header /> */}
      <div className={styles.page_wrapper}>
        <Vertical />
        <List onitemClick={this.handleClick}/>
        <Introduction />
      </div>


      <Animation 
        imageFolder={this.state.folder}
      />
    </div>
    );
  }
}

export default Index;
