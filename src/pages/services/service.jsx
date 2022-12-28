import React from "react";
import { TbWorld } from "react-icons/tb";
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
<div className="row">
  
          <div className="col-12 col-lg-4 col-md-6">
          < CardComponent/>
          </div>
  
          <div className="col-12 col-lg-4 col-md-6">< CardComponent/></div>
          <div className="col-12 col-lg-4 col-md-6">< CardComponent/></div>
  
  
</div>

        
      </div>
    </div>
  );
}

export default Service;
