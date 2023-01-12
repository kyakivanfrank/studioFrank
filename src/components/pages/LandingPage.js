import React, {useState} from "react"

import landingImage from '../../resources/laptopOnly.png'
import boyImage from '../../resources/Boy.png'
import shadow from '../../resources/shadow.png'

export const LandingPage =()=> {

    const [display, setDisplay] = useState("none")
    const [read_more, setRead_more] = useState("read more ...")


const toggler =() => {
    setDisplay( display === "none" ? "block" : "none" )
    setRead_more(read_more === "read more ..." ? " ..." : "read more ..." )
}    
    
    return <div className="landingPage"> 
        
    <div className="displayBox">
    <img id="laptop-img" src={landingImage} alt="landingImage"/>
    <img id="shadow" src={shadow} alt="landingImage"/>
    <img id="boy-img" src={boyImage} alt="landingImage"/>
    
    </div>
    
    <div className="helloText">
    <h1>Hey bud,</h1>
    <p>
    The internet is cool for you, isn't it? The social media rush! and all those cool new apps you play around with to push your entreprenual products / services to  your visitors. 
    
    <span style={{display: display}} id="read_more">
    Well, how about stepping your game a bar up and own a custom Landing page for what you do. <em>website</em>, <em>Mobile app</em> or <em>online shop</em>.
    </span>
    <span onClick={()=> toggler() } style={{color: "yellow",  fontSize:"14px"}}>  {read_more} </span><br/>

    </p>
    
    <p>As you've reached out, we'll create solutions for you quite affordably</p>
    
    <a href="/plans" className="btn btn-white">check our plans</a>
    
    </div>
    
    
    
    </div>
}

