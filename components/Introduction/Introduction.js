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

const Introduction = props => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <Title initialPose="load" pose="loaded">
        Creative Developer
      </Title>
      <p>
        Stef Kors is a Designer / Developer. He likes to work on the
        intersection of design and code, building great websites with great
        people.
      </p>
      <p>
        Together with <a href="http://dkdkpl.com">Victoria</a> and{" "}
        <a href="http://titusknegtel.nl" target="_blank">
          Titus
        </a>{" "}
        he runs <a href="https://www.oneacre.online">oneacre.online</a>. A
        online publisher for experimental long-form writing.
      </p>
      <p>
        He has works at{" "}
        <a target="_blank" href="https://www.ontwerpwerk.nl">
          Ontwerpwerk
        </a>
        . Before his current job he worked and interned at{" "}
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
        In 2018 he completed a bachelor in Communication and Multimedia Design
        at The Hague University of Applied Sciences with a minors in Service
        Design and Co-Design. He likes to work design, prototype and build
        things — online and offline — that work well and efficiently.
      </p>
    </div>
  </div>
);

Introduction.defaultProps = {
  count: "098897",
  string: "testing"
};

export default Introduction;
