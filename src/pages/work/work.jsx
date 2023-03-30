import React from "react";
import styles from "./work.module.scss";
import { TbCheck, TbUsers } from "react-icons/tb";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import CountUp from "react-countup";
import { AiFillFastForward } from "react-icons/ai";

function Work(props) {
  const datas = [
    {
      logo: <TbCheck className={styles.logo} size={40} />,
      count: 4,
      text: "Work Complete",
    },
    {
      logo: <AiFillFastForward className={styles.logo} size={40} />,
      count: 2,
      text: "Year of Experience ",
    },
    {
      logo: <TbUsers className={styles.logo} size={40} />,
      count: 1,
      text: "Total Client",
    },
  ];
  return (
    <div className={styles.work}>
      <div className="container">
        <div className={styles.row}>
          <div className="row">
            {datas.map((data) => (
              <div className={` ${styles.bod} col-12 col-lg-4 col-md-4`}>
                {data.logo}
                <p className={styles.para}>
                  <span className={styles.para_1}>
                    {" "}
                    <CountUp duration={5} end={data.count} />{" "}
                  </span>
                  <span className={styles.para_2}>{data.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
