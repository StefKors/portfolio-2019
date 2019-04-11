import styles from "./Introduction.css";
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

// <Title initialPose="load" pose="loaded">
// </Title>

import data from "../../data/db.json";

const Introduction = props => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <p>
        Stef Kors is a developer with a background in design and user research. His favourite work takes place at the intersection of design and code, building great websites with great people.
      </p>
      <p>
        Together with <a href="http://dkdkpl.com">Victoria</a> and{" "}
        <a href="http://titusknegtel.nl" target="_blank">
          Titus
        </a>{" "}
        he runs <a href="https://www.oneacre.online">oneacre.online</a>. An online publication project for experimental long-form writing.
      </p>
      <p>
      He currently works at{" "}
        <a target="_blank" href="https://www.ontwerpwerk.nl">
          Ontwerpwerk
        </a>
        . Previously he worked at{" "}
        <a target="_blank" href="https://www.publishinglab.nl/">
          PublishingLab
        </a>
        ,{" "}
        <a target="_blank" href="https://www.bynder.com/en/">
          Bynder
        </a>
        ,{" "}
        <a target="_blank" href="https://www.mangrove.com">
          Mangrove
        </a>
        ,{" "}
        <a target="_blank" href="http://www.vandencollection.com">
          Studio Van Den
        </a>
        .
      </p>
      <p>
        He completed a bachelor in Communication and Multimedia Design at The Hague University of Applied Sciences with minors in Service Design and Co-Design. At the end of the day, he likes to build things — online and offline — that work well and efficiently.
      </p>
    </div>
  </div>
);

Introduction.defaultProps = {
  count: "098897",
  string: "testing"
};

export default Introduction;
