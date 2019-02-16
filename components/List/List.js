import styles from "./List.css";
import data from "../../data/db.json";
import ListItem from "../ListItem/ListItem";
import React, { useState, useEffect } from "react";
import { useTransition, animated, config, Spring } from "react-spring";
import { PageTransition } from "next-page-transitions";
import { CSSTransition } from "react-transition-group";

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
          {this.state.slide} /
          <Spring from={{ n: 0 }} to={{ n: data.length }} delay="1000">
            {props => props.n.toFixed()}
          </Spring>
        </span>
      </div>
    );
  }
}

export default List;
