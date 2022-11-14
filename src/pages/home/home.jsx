import React from "react";
import styles from "./home.module.scss";
import Typed from "react-typed";
function Home(props) {
  const para2 = (
    <Typed
      strings={["A front End Developer"]}
      typeSpeed={150}
      backSpeed={100}
      loop
    />
  );
  return (
    <div className={styles.banner}>
      <div className={styles.texts}></div>
      <p className={styles.para1}>I am Adeniran Yaqub</p>
      <p className={styles.para2}>{para2} </p>
    </div>
  );
}

export default Home;
