import styles from "./Animation.css";
import posed, { PoseGroup } from "react-pose";

// const Image = posed.img({
//   closed: {
//     x: 0,
//     opacity: 0,
//     delay: 600,
//     transition: {
//       duration: 500,
//       ease: [0.785, 0.135, 0.15, 0.86]
//     }
//   },
//   open: {
//     x: 0,
//     opacity: 1,
//     delayChildren: 200,
//     staggerChildren: 50,
//     transition: {
//       duration: 500,
//       ease: [0.785, 0.135, 0.15, 0.86]
//     }
//   }
// });

const Wrapper = posed.div({
  open: { x: "0%" },
  closed: { x: "-100%" }
});

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
    return Math.floor(Math.random() * max) + min;
  }

  render() {
    let images;

    const { isOpen } = this.state;

    if (this.props.imageFolder != undefined) {
      images = [...Array(this.props.imageFolder.Images)].map((e, i) => {
        const imgStyle = {
          left: this.random(5, 70) + "vw",
          top: this.random(5, 70) + "vh",
          position: "absolute"
        };

        const staggerDuration = 200;

        return (
          <img
            src={`/static/${this.props.imageFolder.Number}/${i + 1}.jpg`}
            alt={this.props.imageFolder.Project}
            key={i}
            style={imgStyle}
          />
        );
      });
    }



    
    return (
      <React.Fragment>
        <div className={styles.afbeelding_wrapper}>
          <PoseGroup>{images}</PoseGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default Animation;
