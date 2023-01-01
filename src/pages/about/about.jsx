import React from "react";
import styles from "./about.module.scss";
import img from "../../assets/img/myPics.jpg";
import { Progress } from "reactstrap";

import { abouts,skills,aboutMe } from './aboutme';
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
              {abouts.map(about=>(
              <p className={styles.side1_text_paras}>
                <span className={styles.side1_text_para}>{about.main}:</span>{about.Sub}
              </p>
              ))}
            </div>
          </div>

          <div className={styles.skills}>
            <p className={styles.skill_para}>Skills</p>
              {skills.map(skill=>(
                <div>
                  <div className={styles.skills_label}>{skill.skill}</div>
                  <Progress value={skill.value} >{skill.label}</Progress>
                </div>    
              ))}
          </div>
        </div>

        <div className="col-12 col-lg-6 col-md-6">
          <p className={styles.about_side}>About Me</p>
          {aboutMe.map((about,i)=>(
            
          <p className={styles.about_side_para}>
            {about.text}
          </p>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default About;
