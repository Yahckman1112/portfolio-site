import React from "react";
import styles from "./work.module.scss";
import { TbCheck, TbUsers } from "react-icons/tb";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import CountUp from "react-countup";
import { AiFillFastForward } from "react-icons/ai";

function Work(props) {
  const datas = [
    {
      logo: <TbCheck className={styles.logos} size={40} />,
      count: 4,
      text: "Work Complete",
    },
    {
      logo: <AiFillFastForward className={styles.logos} size={40} />,
      count: 2,
      text: "Year of Experience ",
    },
    {
      logo: <TbUsers className={styles.logos} size={40} />,
      count: 1,
      text: "Total Client",
    },
  ];
  return (
    <div className={styles.work} id="work">
      <div className="container">
        <div className={styles.row}>
          
          <div className="row">
            {datas.map((item) => (
              <div className={` col-12 col-lg-4 col-md-4`}>
                <div className={styles.card}>
                  {item.logo}
                  <div className={styles.para}>
                    <p className={styles.para_1}>
                      {" "}
                      <CountUp duration={5} end={item.count} />{" "}
                    </p>
                    <p className={styles.para_2}>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
