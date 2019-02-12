import styles from './Introduction.css';


const Introduction = (props) => (
  <div className={styles.wrapper}>
        <p>
          {props.count} - Projects {props.string}
        </p>
    </div>
)

Introduction.defaultProps = {
  count: '098897',
  string: 'testing'
};

export default Introduction