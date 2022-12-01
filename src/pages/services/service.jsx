import React from 'react';
import {TbWorld} from 'react-icons/tb'
import styles from './service.module.scss'
function Service(props) {
    return (
        <div className={styles.service}>
            <div className="container">
                <div className="text-center">
                    <p className={styles.para1}>Services</p>
                    <p className={styles.para2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className={styles.line}></div>
                </div>

                <div className={`${styles.row} row`}>
                    <div className={` ${styles.card} col-12 col-lg-4`}>
                        <div className={styles.logo}> < TbWorld size={50}/> </div>
                    </div>
                    <div className={` ${styles.card} col-12 col-lg-4`}>2</div>
                    <div className={` ${styles.card} col-12 col-lg-4`}>3</div>
                </div>


            </div>
            
        </div>
    );
}

export default Service;