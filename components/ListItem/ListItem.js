import React, { Component } from "react";
import styles from "./ListItem.css";
import Animation from "../Animation/Animation";
import posed, { PoseGroup } from "react-pose";
import { tween, easing } from "popmotion";
import SplitText from "react-pose-text";

// const props = tween({
//   duration: 5000,
//   flip: 2,
//   ease: easing.cubicBezier(0.785, 0.135, 0.15, 0.86)
// });

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
  }
});

const Title = posed.div({
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
  }
});

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      slide: 1,
      expand: false,
      item: undefined
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onitemClick(this.props.data);
  }

  getHostName(url) {
    if (url === undefined) return null;
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (
      match != null &&
      match.length > 2 &&
      typeof match[2] === "string" &&
      match[2].length > 0
    ) {
      return match[2];
    } else {
      return null;
    }
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <React.Fragment>
        <PoseGroup>
          <Slide
            key={this.props.index}
            className={styles.slide}
            onClick={this.handleClick} >
              <div>
                <div className={styles.url}>
                  <span className={styles.date}>{this.props.data.Date}</span>
                  <a href={this.props.data.Url} target="_blank" rel="noopener noreferrer" >{this.getHostName(this.props.data.Url)}</a>
                </div>
                <Title className={styles.title}>{this.props.data.Project}</Title>

              </div>
              <div className={styles.types}>{this.props.data.Tech}</div>  
              <p className={styles.description}>
                {this.props.data.Description}
              </p>
          </Slide>
        </PoseGroup>
      </React.Fragment>
    );
  }
}

export default ListItem;
