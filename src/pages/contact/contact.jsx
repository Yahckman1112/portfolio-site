import React from 'react';
import styles from './contact.module.scss'
import Form from './form';

import {VscLocation, VscMail} from 'react-icons/vsc'
import { BsPhone } from 'react-icons/bs';
import {FaFacebookF, FaGithub, FaTwitter} from 'react-icons/fa'

function Contact(props) {
    return (
        <div>
            <div className={styles.contact}>
            <div className={`container ${styles.body}`}>
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 ">
                        <p>
                            <span className={`${styles.contact_text} ${styles.contact_text_main}`}>Send Message</span>
                            <span  className={`${styles.contact_text} ${styles.contact_text_sub}`}></span>
                        </p>
                      < Form/>
                    </div>
                    <div className="col-12 col-lg-6  col-md-6">
                    <p>
                            <span className={`${styles.contact_text} ${styles.contact_text_main}`}>Get In Touch</span>
                            <span  className={`${styles.contact_text} ${styles.contact_text_sub}`}></span>
                        </p>
                        <p className={styles.para1} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo mollitia beatae quae harum? Neque inventore ad rem, maiores doloremque quidem dolor laudantium repellat similique cum magnam molestiae hic. Velit, officia. Sed fugiat molestiae harum aperiam quo autem praesentium nam adipisci, porro laboriosam quae dolore
                             ducimus eum, voluptatibus mollitia similique. </p>
                    <p className={styles.para2}>
                    <span className={styles.para2_logo}> < VscLocation size={25}/> </span>
                    <span className={styles.para2_text}>No 16, Odo-Oba olorundogo street Moniya Ibadan Oyo State </span>
                    </p>
                    <p className={styles.para2}>
                    <span className={styles.para2_logo}> < BsPhone size={25}/> </span>
                    <span className={styles.para2_text}>+2348146283237, +23450458307</span>
                    </p>
                    <p className={styles.para2}>
                    <span className={styles.para2_logo}> < VscMail size={25}/> </span>
                    <span className={styles.para2_text}>adeniranyaqub565@gmail.com </span>
                    </p>
                    <div className={styles.logo}>
                   <a href=""> < FaFacebookF className={styles.logos} size={50}/></a>
                   <a href="https://twitter.com/Yahckman">< FaTwitter className={styles.logos} size={50}/></a>
                   <a href="https://github.com/Yahckman1112"> < FaGithub className={styles.logos} size={50}/></a>
                   {/* <a href=""> < BsPhone className={styles.logos} size={50}/></a> */}
            
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.footer}>
                <p className={styles.footer_text}> &copy; copyright  <span className={styles.footer_text1}>Yahckman.</span> All Rights Reserved </p>
                <p className={styles.footer_text}> </p>
            </div>
        </div>
    );
}

export default Contact;