import styles from "./Animation.css";
import posed, { PoseGroup } from "react-pose";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  componentDidMount() {
    console.log("event", this.props.imageFolder);
  }

  imageExists(url, callback) {
    var img = new Image();
    img.onload = function() {
      callback(true);
    };
    img.onerror = function() {
      callback(false);
    };
    img.src = url;
  }

  random(min, max) {
    let r = Math.floor(Math.random() * max) + min;
    return r
  }

  loaded(i) {
    this.setState({ show: true })
  }

  render() {
    if (this.props.imageFolder) {
      return (

          <div className={styles.afbeelding_wrapper}>
            {[...Array(this.props.imageFolder.Images)].map((e, i) => (
              <Img src={`/static/${this.props.imageFolder.Number}/${i + 1}.jpg`}/>
            ))}
          </div>
      );
    } else {
      return null
    }
  }
}





class Img extends React.Component {
  state = { loaded: false };

  onLoad = () => {
    this.setState({ loaded: true });
    console.log("Loaded!");
  };

  random(min, max) {
    let r = Math.floor(Math.random() * max) + min;
    return r
  }

  render() {
    const { loaded } = this.state;

    return (

          <img
            className={(loaded ? styles.loaded : "")}
            src={this.props.src}
            onLoad={this.onLoad}
            style={{right: this.random(0, 40) + "vw", top: this.random(0, 80) + "vh"}}
          />
    );
  }
}


export default Animation;
