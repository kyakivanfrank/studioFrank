import React from "react";
import illustration from "../../resources/frank_Illustration.svg";

const LandingPage =()=> {

    return <div className="landingPage">
        <img src={illustration} alt="landing-page-illustration" />
        <div className="container">
    <div className="helloText">
    <h1>SEEMLESS USER INTERFACES FOR WEB AND MOBILE APPS</h1>
    <p>Frontend Developer with years of experience in javascript</p>
     <a href="/plans" className="btn btn-white">Let's build your project</a>
    </div>
    </div>
    </div>
}
export default LandingPage;