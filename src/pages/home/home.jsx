import React from "react";
import styles from "./home.module.scss";
import Typed from "react-typed";
function Home(props) {
  const para2 = (
    <Typed
      strings={["frontend and backend Developer"]}
      typeSpeed={150}
      backSpeed={100}
      loop
    />
  );
  return (
    <div className={styles.banner}>
      <div className={styles.texts}>
      <p className={styles.para1}>I am Adeniran Yaqub</p>
      <p className={styles.para2}>{para2} </p>

      </div>
    </div>
  );
}

export default Home;
