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
        <p>Hi there, I'm Frank Ivan Kyakusse. A Front-end web developer(client side interfaces) and am the sole ideologist of studio<b>Frank</b> </p>
       <p>To me this is a simple  virtual location where am able to connect with you and showcase what i can put on your regarding web application technologies.
           Here you'd be able to know what i'd put on your table.
       </p>
       <p>I prefer to perceive this virtual space as a studio where i can ideologize and bring my works to life and this drove me to coin it as <b>studioFrank</b> With "Frank" being extracted from my name. I also hold a Tiktok(studioFrank) where i used to choose and talk about science, technology and lifestyle topics in luganda, this was all inspired from imy love for science and technology</p>

       <p>Feel free to check out my works and communicate if anything triggers</p>
    
       </span> 
</div>



</div>

</div>




export default About;