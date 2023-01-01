import React from 'react';
import styles from './portfolio.module.scss'
import CardPort from './card';
function Portfolio(props) {
    return (
        <div className={styles.portfolio} >
          
            <p>
                <spam className={`${styles.upper} ${styles.upper_main}`}>PORTFOLIO</spam>
                <spam className={`${styles.upper} ${styles.upper_sub}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. </spam>
                <spam className={`${styles.upper} ${styles.upper_line}`}>  </spam>
            </p>
          

          < CardPort/>
        </div>
    );
}

export default Portfolio;