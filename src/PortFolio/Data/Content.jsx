import React from "react";
import CSS from '../CSS/portfolio.module.css'
import mypic1 from '../Data/withoutbackground.png'
export default function Content()
{
    return(
        <>
        <div className={CSS.name}><p style={{marginLeft:"150px",marginTop:"70px"}}>Chutun Kumar Gupta</p><h1 style={{color:"pink",fontWeight:"10000px"}}>Web Developer</h1></div>
        <div className={CSS.pic1}><img src={mypic1} alt="" /></div>
        </>
    )
}