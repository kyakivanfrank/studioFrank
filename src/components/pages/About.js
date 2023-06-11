import React from "react"

// import heroPic  from "../../resources/images/frank.jpg"
import heroPic1 from "../../resources/images/frank.png"


const About = () => <div className="container">
    <div className="about">

        <h1>About <span style={{ fontWeight: "300" }}>studio</span>Frank</h1>

        <div className="hero_details" >

            <div className="hero_pic">
                <img style={{ width: "100%" }} src={heroPic1} alt="heroPic" />
            </div>

            <span>
                <p>Hi there, I'm <b>Frank Ivan Kyakusse</b>. A Front-end web developer and the creator of studio<b>Frank</b> </p>
                <p>
                    I'm thrilled by sleek but wholly inclusive designs. In this era, <strong>minimalism is the new complexity.</strong>  What matters most is that a platform meets all the desired use-cases without excessive UI elements. A single button can unravel different features in various scenarios, leading to a clean and scalable UI. That's what I aim for in my work.
                </p>
                <p>Please feel free to navigate through <a href="https://frankkyakusse.com/portfolio" style={{ color: "#f5f5c8", fontStyle: "oblique" }}>My portfolio</a>, You never know, something might catch your attention.</p>

            </span>
        </div>
    </div>
</div>
export default About;