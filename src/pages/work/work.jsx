import React from 'react';
import styles from './work.module.scss'
import { TbWorld } from "react-icons/tb";
import CountUp from 'react-countup';

function Work(props) {

    const datas= [
        {
            logo: <TbWorld className={styles.logo} size={40}/> ,
            count:100,
            text: 'Work Complete'
        },
        {
            logo: <TbWorld className={styles.logo} size={40}/> ,
            count:100,
            text: 'Work Complete'
        },
        {
            logo: <TbWorld className={styles.logo} size={40}/> ,
            count:100,
            text: 'Work Complete'
        },
        {
            logo: <TbWorld className={styles.logo} size={40}/> ,
            count:100,
            text: 'Work Complete'
        },
    ]
    return (
        <div className={styles.work}>
            <div className="container">
       
            <div className={styles.row}>
          <div className="row">

          {datas.map(data=>(

            <div className={` ${styles.bod} col-12 col-lg-3`}>
           {data.logo}
                <p className={styles.para}>
                    <span className={styles.para_1} > < CountUp end={data.count}/> </span>
                    <span className={styles.para_2} >{data.text}</span>
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