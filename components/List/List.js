import styles from "./List.css";
import data from "../../data/db.json";
import ListItem from "../ListItem/ListItem";
import { Spring } from "react-spring";
import posed, { PoseGroup } from "react-pose";

const SlideCounter = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 700,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 700,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const ListWrapper = posed.div({
  loaded: { x: '0%', staggerChildren: 50 },
  load: { x: '0%' }
})

const ListItemWrapper = posed.div({
  loaded: { opacity: 1 },
  load: { opacity: 0 }
})



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {}

  handleClick = (value) => {
    this.props.onitemClick(value); 
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <ListWrapper className={styles.projectList} initialPose="load" pose="loaded">
          {data.map((post, index) => (
            <ListItemWrapper key={index}>
              <ListItem
                data={post}
                index={index}
                key={index}
                isOpen={"open"}
                className={styles.item}
                onitemClick={this.handleClick}
              />
            </ListItemWrapper>
          ))}
        </ListWrapper>
      </div>
    );
  }
}

export default List;
