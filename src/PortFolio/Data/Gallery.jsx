import React, { useState } from "react";
import styles from "../CSS/gallery.module.css"
import img from "../../images/merapic.jpg"
import img1 from '../../images/mpic.webp';
import img2 from '../../images/mpic.jpg';
import img3 from '../../images/pic4.jpg';
import img4 from '../../images/mpic6.jpg'
import img5 from '../../images/mpic1.jpg'
import img6 from '../../images/mpic8.webp'
import img7 from '../../images/mpic7.jpg'
import img8 from '../../images/cpic.jpeg'
export default function Gallery()
{

    let [isbool,setisbool]=useState(true)
    let changePic=()=>
    {
        setisbool(!isbool)
    }
    return(
        <div className={styles.main}>
            <div className={styles.pic}>
                <button className={styles.btn} onClick={changePic}>{isbool?<img src={img}/>:<img src={img2}/>}</button>
            </div>
            <div className={styles.pic}>
            <button className={styles.btn} onClick={changePic}>{isbool?<img src={img1}/>:<img src={img5}/>}</button>
            </div>
            <div className={styles.pic}>
            <button className={styles.btn} onClick={changePic}>{isbool?<img src={img2}/>:<img src={img}/>}</button>
            </div>
            <div className={styles.pic}>
            <button className={styles.btn} onClick={changePic}>{isbool?<img src={img3}/>:<img src={img7}/>}</button>
            </div>
            <div className={styles.pic}>
            <button className={styles.btn} onClick={changePic}>{isbool?<img src={img4}/>:<img src={img6}/>}</button>
            </div>
            <div className={styles.pic}>
            <button className={styles.btn} onClick={changePic}>{isbool?<img src={img5}/>:<img src={img8}/>}</button>
            </div>
        </div>
    )
}