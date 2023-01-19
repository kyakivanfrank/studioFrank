import React, {useState} from "react";
import illustration from "../../resources/frank_Illustration.svg";

const LandingPage =()=> {

    // const [display, setDisplay] = useState("none")
    // const [read_more, setRead_more] = useState("read more ...")


// const toggler =() => {
//     setDisplay( display === "none" ? "block" : "none" )
//     setRead_more(read_more === "read more ..." ? " ..." : "read more ..." )}
    
    return <div className="landingPage">
        <img src={illustration} alt="landing-page-illustration" />
        <div className="container">
    <div className="helloText">
    <h1>SEEMLESS USER INTERFACES FOR WEB AND MOBILE APPS</h1>
    <p>Frontend Developer with years of experience in javascript</p>

    <>
     {/* <p>
    The internet is cool for you, isn't it? The social media rush! and all those cool new apps you play around with to push your entreprenual products / services to  your visitors. 
    <span style={{display: display}} id="read_more">
    Well, how about stepping your game a bar up and own a custom Landing page for what you do. <em>website</em>, <em>Mobile app</em> or <em>online shop</em>.
    </span>
    <span onClick={()=> toggler() } style={{color: "yellow",  fontSize:"14px"}}>  {read_more} </span><br/>
    </p>
    <p>As you've reached out, we'll create solutions for you quite affordably</p> */}
    </>
    <a href="/plans" className="btn btn-white">Let's build your project</a>
    </div>
    </div>
    </div>
}
export default LandingPage;
