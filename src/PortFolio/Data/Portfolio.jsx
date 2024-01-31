import React, { useState } from "react";
import CSS from '../CSS/portfolio.module.css'
import mypic from './mpic.jpg';
import profile from './Mypic.jpg'
import mypic1 from './withoutbackground.png'
import {FaBook, FaFacebook, FaFilePdf, FaGreaterThan, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaServicestack, FaTwitter, FaUser, FaYoutube} from 'react-icons/fa'
import Content from "./Content";
import Education from "./Education";
import Contact from "./Contact";
import Gallery from "./Gallery";
export default function Portfolio()
{
    let [show ,setShow]=useState(false);
    setTimeout(()=>
    {
        setShow(true)
    },4000)
    return(
        <>
        <div className={CSS.main}>
            <div className={CSS.pic}>
                <div className={CSS.mypic}><img className={CSS.img} src={mypic} alt="" /></div>
                <div className={CSS.icon}>
                    <h1 style={{color:"white"}}>Chutun Kr Gupta</h1> 
                    <h2><a href="https://www.instagram.com/c.k.gupta957280?igsh=NHRmeHFha2R2N2l4"><FaInstagram className={CSS.i}/></a><a href="https://www.youtube.com/@CodeWithCode_guru"><FaYoutube className={CSS.i}/></a><a href="https://www.facebook.com/chutun.kumar.334?mibextid=ZbWKwL"><FaFacebook className={CSS.i}/></a><a href="https://twitter.com/CHUTUNK03061802?t=1mRQWXPXotxnscQuqXnYlg&s=09"><FaTwitter className={CSS.i}/></a><a href="https://www.linkedin.com/in/chutun-kumar-96453a235"><FaLinkedin className={CSS.i}/></a></h2>
                </div>
                <div className={CSS.bottom}>
                    <ul>
                        <li><a href="" target=""><FaHome className={CSS.a}/>Home</a></li>
                        <li><a href=""><FaUser className={CSS.a}/>About</a></li>
                        <li><a href=""><FaFilePdf className={CSS.a}/>Resume</a></li>
                        <li><a href=""><FaBook className={CSS.a}/>Portfolio</a></li>
                        <li><a href=""><FaServicestack className={CSS.a}/>Services</a></li>
                    </ul>

                    <a href="chutunkumar2018@gmail.com" style={{color:"red",marginLeft:"30px",textDecoration:"none"}}><FaMailBulk/>chutunkumar2018@gmail.com</a>
                </div>
            </div>
            <div className={CSS.content}>
                {show&&<Content/>}

                {/* <div className={CSS.name}><p style={{marginLeft:"150px",marginTop:"70px"}}>Chutun Kumar Gupta</p><h1 style={{color:"pink",fontWeight:"10000px"}}>Web Developer</h1></div>
                <div className={CSS.pic1}><img src={mypic1} alt="" /></div> */}
            </div>
        </div>
        <div className={CSS.footer}>
            {/* <div className={CSS.left}></div> */}
            <div className={CSS.right}>
                <div className={CSS.heading}>
                    <h1 style={{color:"blue"}}>About</h1>
                    <hr style={{backgroundColor:"indigo",height:"3px",width:"115px",position:"relative",right:"374px",bottom:"20px"}} />
                    <p className={CSS.para}>To develop and deploy the different different type of websites contact with me, I am here to help you to grow your organization to provide a good outlook and attractive Website. I am here to design a beautiful static and dynamic websites for your organization. </p>
                </div>
                <div className={CSS.profile}>
                    <div className={CSS.pic}><img style={{borderRadius:"10px"}} height="100%" width="100%" src={profile} alt="" /></div>
                    <div className={CSS.details}>
                         <div className={CSS.up}>
                            <h1 className={CSS.h} style={{marginTop:"-0px"}}>Full Stack Web Developer</h1>
                            <p style={{marginTop:"-20px"}}>To develop and deploy any kind of Wbsites front-end and Back-end both part, kindly visit my profile to contact</p>
                         </div>
                         <div className={CSS.down}>
                            <div className={CSS.left}>
                                <ul>
                                    <li><FaGreaterThan/> Birthday: 01 Feb 2001</li>
                                    <li><FaGreaterThan/> Website: www.ckgupta.com</li>
                                    <li><FaGreaterThan/> Phone: +91 6203399316</li>
                                    <li><FaGreaterThan/> City: Bangalore, India</li>
                                </ul>
                            </div>
                            <div className={CSS.left}>
                            <ul>
                                    <li><FaGreaterThan/>Age: 23</li>
                                    <li><FaGreaterThan/>Degree: Bachelor Of Engg.</li>
                                    <li><FaGreaterThan/>Email: chutunkumar2018@</li>
                                    <li><FaGreaterThan/>Freelancing: Available</li>
                            </ul>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Skills started */}
        <div className={CSS.skills}>
            <div className={CSS.right}>
                <div className={CSS.top}>
                    <h1 style={{color:"blue",marginLeft:"13px"}}>Skills</h1>
                    <hr style={{backgroundColor:"indigo",height:"3px",width:"100px",position:"relative",right:"370px",bottom:"20px"}} />
                </div>
                <div className={CSS.desc}>
                    <p>As a Computer Science student I have all the basic knwoledges of core subjects and I have very good knowlege in web development technologies, currently I am using MERN(Mongo DB, Express JS, React JS, and Node JS)
                        apart from I am also good in Java Programming.
                    </p>
                </div>
                <div className={CSS.skillsDetails}>
                    <div className={CSS.left}>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>HTML</p>
                                <p>100%</p>
                            </div>
                            <hr className={CSS.hr}/>
                        </div>
                        <div className={CSS.col}>
                           <div className={CSS.html}>
                                <p>CSS</p>
                                <p>100%</p>
                            </div>
                            <hr className={CSS.hr}/>
                        </div>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>JAVASCRIPT</p>
                                <p>90%</p>
                            </div>
                            <hr className={CSS.hr1}/>
                        </div>
                        <div className={CSS.col}>
                           <div className={CSS.html}>
                                <p>REACT JS</p>
                                <p>90%</p>
                            </div>
                            <hr className={CSS.hr1}/>
                        </div>
                    </div>
                    <div className={CSS.left}>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>NODE JS</p>
                                <p>90%</p>
                            </div>
                            <hr className={CSS.hr1}/>
                        </div>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>MONGO DB</p>
                                <p>100%</p>
                            </div>
                            <hr className={CSS.hr}/>
                        </div>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>EXPRESS JS</p>
                                <p>90%</p>
                            </div>
                            <hr className={CSS.hr1}/>
                        </div>
                        <div className={CSS.col}>
                            <div className={CSS.html}>
                                <p>JAVA</p>
                                <p>70%</p>
                            </div>
                            <hr className={CSS.hr2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Skills Ends */}
        <div className={CSS.educat}>
        <Education/>
        </div>

        {/* Gallery Starts here */}
        <div className={CSS.gallery}>
            <div className={CSS.right}>
                <Gallery/>
            </div>
        </div>
        {/* Gallery Ends here */}

        {/* Contacts Details Starts here */}
        <div className={CSS.contact}>
            <div className={CSS.left}></div>
            <div className={CSS.right}>
                <Contact/>
            </div>
        </div>
        </>
    )
}