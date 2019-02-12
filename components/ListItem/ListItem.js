import React, { Component } from 'react'
import styles from "./ListItem.css";

const ListItem = (props, index, slide) => (

  <React.Fragment>
    {props.slide === (props.index + 1) &&
      <div key={props.data.Number} className={styles.project} >
        <h4 className={styles.eyebrow}>{props.data.Type} completed in {props.data.Date}</h4>
        <h1 className={styles.title}>{props.data.Project}</h1>
        <p className={styles.text}>{props.data.Description}</p>
      </div>
    }
  </React.Fragment>
);

ListItem.defaultProps = {
  current: 1,
};


export default ListItem;
