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
        The fact is that I'm thrilled by simple but satisfying designs, From my research, I learned that in this era <strong>minimalism is the new complexity.</strong>  what matters most is that as long as a platform holds all the desired uses-cases, it doesn't neccesarily need as many UI elements for each feature. that means just  mere button can unravel different features in dfferent scenarios. thus having a clean User-interface that could be easily scalable. and this is what i work towards.
        </p>
        <p>Feel free to navigate through <a href="https://frankkyakusse.com/portfolio" style={{color:"#f5f5c8", fontStyle:"oblique"}}>My portfolio</a>, something might click you never know.</p>
       
       </span> 
</div>
</div>
</div>
export default About;