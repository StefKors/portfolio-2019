import styles from "./Introduction.module.css";

const Introduction = props => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <p>
        Stef Kors is a developer with a background in design and user research.
        His favourite work takes place at the intersection of design and code,
        building great websites with great people.
      </p>
      <p>
        Together with <a href="http://dkdkpl.com">Victoria</a> and{" "}
        <a href="http://titusknegtel.nl" target="_blank">
          Titus
        </a>{" "}
        he runs <a href="https://www.oneacre.online">oneacre.online</a>. An
        online publication project for experimental long-form writing.
      </p>
      <p>
        He currently works at{" "}
        <a target="_blank" href="https://www.ontwerpwerk.nl">
          Ontwerpwerk
        </a>
        . Previously he worked at{" "}
        <a target="_blank" href="https://www.publishinglab.nl/">
          PublishingLab
        </a>
        ,{" "}
        <a target="_blank" href="https://www.bynder.com/en/">
          Bynder
        </a>
        ,{" "}
        <a target="_blank" href="https://www.mangrove.com">
          Mangrove
        </a>
        ,{" "}
        <a target="_blank" href="http://www.vandencollection.com">
          Studio Van Den
        </a>
        .
      </p>
      <p>
        He completed a bachelor in Communication and Multimedia Design at The
        Hague University of Applied Sciences with minors in Service Design and
        Co-Design. At the end of the day, he likes to build things — online and
        offline — that work well and efficiently.
      </p>

      <div className={styles.selected}>
        <p>Greatest Hits</p>
        <ol>
        <li>
            <a href="https://apps.apple.com/us/app/kor-utrecht/id1478256409" target="_blank">
              <div className={styles.metadata}>
                <h3>Kunst in openbare ruimte Utrecht</h3>
                <p>2019</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.borrenstaalenhoef.nl" target="_blank">
              <div className={styles.metadata}>
                <h3>Borren Staalenhoef Architects</h3>
                <p>2019</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.oneacre.online/?id=lisa-stef-J1541248969078" target="_blank">
              <div className={styles.metadata}>
                <h3>Meaning Seeking Animals</h3>
                <p>2018</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.publishorperish.pro" target="_blank">
              <div className={styles.metadata}>
                <h3>Publish or Perish</h3>
                <p>2018</p>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
);

Introduction.defaultProps = {
  count: "098897",
  string: "testing"
};

export default Introduction;
