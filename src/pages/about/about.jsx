import React from "react";
import styles from "./about.module.scss";
import img from "../../assets/img/myPics.jpg";
import { Progress } from "reactstrap";
function About(props) {
  return (
    <div className={styles.about}>
      <div className={`${styles.about_body} row`}>
        <div className="col-12 col-lg-6 col-md-6">
          <div className={styles.side1}>
            <div className={styles.side1_image}>
              <img src={img} alt="my photo" />
            </div>

            <div className={styles.side1_text}>
              <p className={styles.side1_text_paras}>
                <span className={styles.side1_text_para}>Name:</span>Adeniran
                Yaqub
              </p>
              <p className={styles.side1_text_paras}>
                <span className={styles.side1_text_para}>Profile:</span>{" "}
                Front-end Developer
              </p>
              <p className={styles.side1_text_paras}>
                <span className={styles.side1_text_para}>Email:</span>
                adeniranajibade2014@gmail.com
              </p>
              <p className={styles.side1_text_paras}>
                <span className={styles.side1_text_para}>Phone:</span>
                +2348146283237
              </p>
            </div>
          </div>
          <div className={styles.skills}>
            <p className={styles.skill_para}>Skills</p>
            <div>
              <div className={styles.skills_label}>HTML 85%</div>{" "}
              <Progress value={85} />
              <div className={styles.skills_label}>CSS 75%</div>{" "}
              <Progress value={75} />
              <div className={styles.skills_label}>JavaScript 65%</div>{" "}
              <Progress value={65} />
              <div className={styles.skills_label}>React 70%</div>{" "}
              <Progress value={70} />
              <div className={styles.skills_label}>Material UI 65%</div>{" "}
              <Progress value={65} />
              <div className={styles.skills_label}>Git & GitHub 70%</div>{" "}
              <Progress value={70} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <p className={styles.about_side}>About Me</p>
          <p className={styles.about_side_para_para}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            consequatur excepturi doloremque, illum numquam alias odio.
            Deserunt, accusantium suscipit. Minima aperiam numquam molestias,
            exercitationem omnis quo cumque veritatis ipsum consequatur.
          </p>
          <p className={styles.about_side_para_para}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            consequatur excepturi doloremque, illum numquam alias odio.
            Deserunt, accusantium suscipit. Minima aperiam numquam molestias,
            exercitationem omnis quo cumque veritatis ipsum consequatur.
          </p>
          <p className={styles.about_side_para_para}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            consequatur excepturi doloremque, illum numquam alias odio.
            Deserunt, accusantium suscipit. Minima aperiam numquam molestias,
            exercitationem omnis quo cumque veritatis ipsum consequatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
