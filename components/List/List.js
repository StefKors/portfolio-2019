import styles from './List.css';
import data from '../../data/db.json';
import ListItem from '../ListItem/ListItem';
import React, { useState, useCallback } from 'react';
// import { useTransition, animated } from 'react-spring';
import { Transition, Spring } from 'react-spring';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      slide: 1
    };
  }

  componentDidMount() {}

  next = () => {
    if (this.state.slide >= data.length) {
      var newSlide = 1
    } else {
      var newSlide = this.state.slide + 1
    }
    
    this.setState({
      slide: newSlide
    });
    // console.log("next", this.state.slide)
  }

  previous = () => {
    if (this.state.slide <= 1) {
      var newSlide = data.length
    } else {
      var newSlide = this.state.slide - 1
    }
    
    this.setState({
      slide: newSlide
    });
    // console.log("previous", this.state.slide)
  }

  render() {

    return (
      
      <div className={styles.wrapper}>
        <div className={styles.controls}>
          <button onClick={this.next}>←</button>
          <button onClick={this.previous}>→</button>
        </div>

        {data.map((post, index) => (
          <ListItem data={post} index={index} slide={this.state.slide}></ListItem>
        ))}

          <span className={styles.slide}>
            {this.state.slide} / 
            <Spring 
              from={{ n: 0 }} 
              to={{ n: data.length }}
              delay= '1000'>
              {props => props.n.toFixed()}
            </Spring>
          </span>
    </div>
    );
  }
}


export default List