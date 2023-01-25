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
        <p>
        My enthusiasm lies in building and giving Interactivity to User Interfaces on all platforms like Web apps, and mobile and desktop apps.</p>
        <p>The fact is that I'm thrilled by simple but satisfying designs, and that's where i work towards.</p>
        <p>Please feel free to navigate through <a href="https://studiofrank.netlify.app/portfolio" style={{color:"#f5f5c8", fontStyle:"oblique"}}>My portfolio</a>, something might click you never know.</p>
       
       </span> 
</div>
</div>
</div>
export default About;