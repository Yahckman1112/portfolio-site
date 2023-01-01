import React from "react";
import styles from "./service.module.scss";
import CardComponent from './card'
function Service(props) {
  return (
    <div className={styles.service}>
      <div className="container">
        <div className="text-center">
          <p className={styles.para1}>Services</p>
          <p className={styles.para2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.line}></div>
        </div>  
          <div>
          < CardComponent/>
          </div>
  


        
      </div>
    </div>
  );
}

export default Service;
