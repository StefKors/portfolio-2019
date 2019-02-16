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
    opacity: 0,
  },
  hover: {
    scale: 0.99
  }
});

const Title = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 200,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 200,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const Description = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 200,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 200,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

const ListItem = (props, index, slide) => (
  <React.Fragment>
    <PoseGroup>
      {props.slide === props.index + 1 && (
        <Slide key={props.index} className={styles.slide}>
          <h4 className={styles.eyebrow}>
            {props.data.Type} completed in {props.data.Date}
          </h4>
          <Title className={styles.title}>
            {props.expand} {props.data.Project}
          </Title>

            {props.expand && (
              <Description className={styles.description}>
                {props.data.Description}
              </Description>
            )}
        </Slide>
      )}
    </PoseGroup>
  </React.Fragment>
);

ListItem.defaultProps = {
  current: 1
};

export default ListItem;
