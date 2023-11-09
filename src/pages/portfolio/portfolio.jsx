import React from 'react';
import styles from './portfolio.module.scss'
import CardPort from './card';
function Portfolio(props) {
    return (
        <div className={styles.portfolio} id='portfolio'>
          
            <p>
                <spam className={`${styles.upper} ${styles.upper_main}`}>PORTFOLIO</spam>
                <spam className={`${styles.upper} ${styles.upper_sub}`}> I build web applications with user-friendly frameworks and dependencies. I build with React.js </spam>
                <spam className={`${styles.upper} ${styles.upper_line}`}>  </spam>
            </p>
          

          < CardPort/>
        </div>
    );
}

export default Portfolio;