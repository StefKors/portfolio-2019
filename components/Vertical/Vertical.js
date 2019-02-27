import styles from "./Vertical.css";
import posed, { PoseGroup } from "react-pose";

const Title = posed.div({
  load: {
    x: -200,
    opacity: 0,
    delay: 600,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  loaded: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const Introduction = props => (
  <div className={styles.vertical}>
    <div className={styles.links}>
      <a href="">twitter</a>
      <a href="">email</a>
      <a href="">linkedin</a>
    </div>
  </div>
);

export default Introduction;
