import React from "react";
import design from "../CSS/tooltech.module.css"
export default function ToolTech()
{
    return(
        <>
        <div className={design.toolbox}>
            <div className={design.header}>
                <h1>Technologies, on which I work</h1>
            </div>
            <div className={design.tool}>
                <div className={design.box}>
                    <a href="https://html.com/"><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/landscape/html5.png" alt="" /></a>
                    <h3>HTML</h3>
                </div>
                <div className={design.box}>
                    <a href="https://css3.com/"><img src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_1280.png" alt="" /></a>
                    <h3>CSS3</h3>
                </div>
                <div className={design.box}>
                    <a href="https://www.javascript.com/"><img src="https://res.cloudinary.com/teepublic/image/private/s--esVOxsUO--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-163/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-274/b_rgb:191919/c_limit,f_jpg,h_630,q_90,w_630/v1509628922/production/designs/2018878_1.jpg" alt="" /></a>
                    <h3>JAVASCRIPT</h3>
                </div>
                <div className={design.box}>
                    <a href="https://legacy.reactjs.org/"><img src="https://i.pinimg.com/originals/17/0b/41/170b412294016d0e70557d18b1667ee7.jpg" alt="" /></a>
                    <h3>REACT JS</h3>
                </div>
                <div className={design.box}>
                    <a href="https://nodejs.org/en"><img src="https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png" alt="" /></a>
                    <h3>NODE JS</h3>
                </div>
                <div className={design.box}>
                    <a href="https://expressjs.com/"><img src="https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt="" /></a>
                    <h3>EXPRESS JS</h3>
                </div>
                <div className={design.box}>
                    <a href="https://www.mongodb.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4QGXqQfpmSew7XzYAWk7DU2rkilKKtbCD398ytHCZfZvZ2jPXJvW8qGTSo2lZOE9YfA&usqp=CAU" alt="" /></a>
                    <h3>MONGO DB</h3>
                </div>
                <div className={design.box}>
                    <a href="https://www.java.com/"><img src="https://png.pngitem.com/pimgs/s/174-1746632_java-logo-transparent-png-java-programming-language-logo.png" alt="" /></a>
                    <h3>JAVA</h3>
                </div>
            </div>
        </div>
        <div className={design.toolbox}>
            <div className={design.header}>
                <h1>Tools, which I use</h1>
            </div>
            <div className={design.tool}>
                <div className={design.box}>
                    <a href="https://git-scm.com/"><img src="https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png" alt="" /></a>
                    <h3>Git</h3>
                </div>
                <div className={design.box}>
                    <a href="https://github.com/"><img src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-8173947-6491025.png?f=webp" alt="" /></a>
                    <h3>GitHub</h3>
                </div>
                <div className={design.box}>
                    <a href="https://code.visualstudio.com/"><img src="https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png" alt="" /></a>
                    <h3>VS Code</h3>
                </div>
                <div className={design.box}>
                    <a href="https://www.eclipse.org/"><img src="https://www.liblogo.com/img-logo/ec8295e85d-eclipse-logo-eclipse-logo-software--com.png" alt="" /></a>
                    <h3>Eclipse</h3>
                </div>
            </div>
        </div>
        </>
    )
}