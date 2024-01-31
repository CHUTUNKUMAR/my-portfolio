import React from "react";
import CSS from '../CSS/portfolio.module.css'
import {FaGraduationCap, FaStar } from "react-icons/fa";
export default function Education()
{
    return(
        <>
        <div className={CSS.education}>
        <h1 style={{color:"blue",marginLeft:"20px"}}><FaGraduationCap style={{color:"black",marginRight:"5px"}}/>My Education</h1>
        <hr style={{backgroundColor:"indigo",height:"3px",width:"225px",position:"relative",right:"274px",bottom:"20px"}} />
        </div>
        <div className={CSS.eduDetails}>
            <div className={CSS.matric}>
                <FaStar/> <span className={CSS.span}>MATRICULATION(2015-2016)</span>
                <p>I completed My Matriculation form Bihar School Examination Board(SBS High School, Karhan Bairiya, Kesariya, E. Champaran)</p>
                <FaStar/> <span className={CSS.span}>INTERMEDIATE(2016-2018)</span>
                <p>I completed My Intermediate Of Science with Mathematics stream from Bihar School Examination Board(BPS College, Kesariya, E. Champaran)</p>
            </div>
            <div className={CSS.matric}>
            <FaGraduationCap/> <span className={CSS.span}>BACHELOR OF ENGINEERING(2019-2023) (Computer Science & Engg)</span>
            <p>I completed Bachelor Of Engineering with <b>8.0 CGPA </b>form JCT Collge of Engineering and Technology, Coimbatore which is affiliated with Anna University, Chennai.</p>
            </div>
        </div>
        </>
    )
}