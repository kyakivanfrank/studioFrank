import React from "react"

// import heroPic  from "../../resources/images/frank.jpg"
import heroPic1  from "../../resources/images/frank.png"


const About =()=> <div className="container">
 <div className="about">

<h1>About <span style={{fontWeight:"300"}}>studio</span>Frank</h1>

<div className="hero_details" >

    <div className="hero_pic">
        <img style={{width: "100%"}} src={heroPic1} alt="heroPic"/>
    </div>

    <span>
        <p>Hi there, I'm <b>Frank Ivan Kyakusse</b>. A Front-end web developer and the creator of studio<b>Frank</b> </p>
       <p>My aim here is to showcase my works in technologies of <em>Websites, Web apps, Mobile</em> and <em>Desktops apps</em>, and anything related to design.
        be sure to check them out.
       </p>
       <p>Feel free to check out my works and communicate if anything triggers</p>
       </span> 
</div>
</div>
</div>
export default About;