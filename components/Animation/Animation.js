import styles from './Animation.css';
import posed, { PoseGroup } from "react-pose";


const Image = posed.div({
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

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  
  componentDidMount() {
    // var req = require.context("/static/23/", false, /.*\.jpg$/);
    // req.keys().forEach(function(key){
    //   req(key);
    //   console.log('key', key)
    // });
  }

  imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }


  render() {
    // This syntax ensures `this` is bound within handleClick
    let images;
    if (this.props.imageFolder != undefined) {
      images = (
        [...Array(this.props.imageFolder.Images)].map((e, i) => {
          return <img 
          src={`/static/${this.props.imageFolder.Number}/${i+1}.jpg`} 
          alt={this.props.imageFolder.Project}
          key={i} 
          />
        })
      )
    }
    return (
      <React.Fragment>
        <div styles={styles.afbeelding}>
        {/* {this.props.imageFolder != undefined &&
        } */}
      {/* { this.props.imageFolder != undefined && 
        [...Array(this.props.imageFolder.Images)].map((e, i) => {
          <img 
            src={`/static/23/${this.props.imageFolder.Number}.jpg`} 
            alt={this.props.imageFolder.Project}
            key={i} 
            />
      })} */}

      {images}


        </div>
      </React.Fragment>
    );
  }
}


export default Animation

