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
    y: -10,
    opacity: 0,
    transition: {
      duration: 700,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      slide: 1,
      expand: false,
    };
  }

  componentDidMount() {}

  next = () => {
    if (this.state.slide >= data.length) {
      var newSlide = 1;
    } else {
      var newSlide = this.state.slide + 1;
    }

    this.setState({
      slide: newSlide
    });
  };

  previous = () => {
    if (this.state.slide <= 1) {
      var newSlide = data.length;
    } else {
      var newSlide = this.state.slide - 1;
    }

    this.setState({
      slide: newSlide
    });
  };

  openProject = () => {
    // toggle state
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  };

  render() {
    return (
      <div className={styles.wrapper}>

        {data.map((post, index) => (
          <ListItem
            data={post}
            index={index}
            slide={this.state.slide}
            expand={this.state.expand}
            key={index}
            isOpen={"open"}
          />
        ))}

        <div className={styles.left} onClick={this.previous} />
        <div className={styles.center} onClick={this.openProject}/>
        <div className={styles.right} onClick={this.next}/>

        <span className={styles.slide}>
        <PoseGroup>
          <SlideCounter className={styles.SlideCounter} key={this.state.slide}>
            {this.state.slide} 
          </SlideCounter>
          </PoseGroup>
          /
          <Spring from={{ n: 0 }} to={{ n: data.length }} delay="1000">
            {props => props.n.toFixed()}
          </Spring>
        </span>
      </div>
    );
  }
}

export default List;
