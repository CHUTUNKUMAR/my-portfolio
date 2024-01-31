import React from "react";
import styles from '../CSS/contact.module.css'
import { FaEnvelope, FaLocationArrow, FaMapMarked, FaMapMarker, FaMobile} from "react-icons/fa";
export default function Contact()
{
    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.col}>
                        <div className={styles.lft}>
                            <h1 className={styles.h}><FaMapMarker className={styles.fa}/></h1>
                        </div>
                        <div className={styles.ryt}>
                            <p style={{fontSize:"25px",position:"relative",bottom:"15px"}}>Location:</p>
                            <p style={{position:"relative",bottom:"35px"}}>Rajainagar, Near Metro Station , Bangalore 560010</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                    <div className={styles.lft}>
                            <h1 className={styles.h}><FaEnvelope className={styles.fa}/></h1>
                        </div>
                        <div className={styles.ryt}>
                            <p style={{fontSize:"25px",position:"relative",bottom:"15px"}}>Email:</p>
                            <p style={{position:"relative",bottom:"35px"}}>chutunkumar2018@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                    <div className={styles.lft}>
                            <h1 className={styles.h}><FaMobile className={styles.fa}/></h1>
                        </div>
                        <div className={styles.ryt}>
                            <p style={{fontSize:"25px",position:"relative",bottom:"15px"}}>Phone:</p>
                            <p style={{position:"relative",bottom:"35px"}}>+91 6203399316</p>
                        </div>
                    </div>
                </div>
                <div className={styles.top}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15557.21352437509!2d77.59631594999999!3d12.888203299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706027616561!5m2!1sen!2sin" style={{width:"90%",border:"none" ,height:"100%", allowfullscreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}}></iframe>
                </div>
            </div>
            <div className={styles.right}>
                <form action="">
                    <input required="" className={styles.input} type="text" placeholder="Enter Your Name"/>
                    <input className={styles.input} type="text" placeholder="Enter Your Email"/>
                    <input className={styles.input1} type="text" placeholder="Enter Subject"/>

                    <textarea className={styles.text} name="" id="" cols="66" rows="15" placeholder="Enter Message"></textarea>
                    <button className={styles.btn}>Send Message</button>
                </form>
            </div>
        </div>
    )
}