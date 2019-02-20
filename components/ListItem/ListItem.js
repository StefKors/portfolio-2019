import React, { Component } from "react";
import styles from "./ListItem.css";
import posed, { PoseGroup } from "react-pose";
import { tween, easing } from "popmotion";
import SplitText from "react-pose-text";

const props = tween({
  duration: 5000,
  flip: 2,
  ease: easing.cubicBezier(0.785, 0.135, 0.15, 0.86)
});

const Slide = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 600,
    transition: {
      x: { type: "spring" },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      x: { type: "spring" },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 0.8
  }
});

const Title = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 1500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const Eyebrow = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 1500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 1500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const ListItem = (props, index, slide) => (
  <React.Fragment>
    <PoseGroup>
      {props.slide === props.index + 1 && !props.expand && (
        <Slide key={props.index} className={styles.slide}>
          <Eyebrow className={styles.eyebrow}>
            {props.data.Type} completed in {props.data.Date}
          </Eyebrow>
          <Title className={styles.title}>
            {props.expand} {props.data.Project}
          </Title>
        </Slide>
      )}
    </PoseGroup>
  </React.Fragment>
);

ListItem.defaultProps = {
  current: 1
};

export default ListItem;
