import React from "react";
import illustration from "../../resources/frank_Illustration.svg";
import TechnologyIcons from "../tech-icons";

const LandingPage = () => {
  const date = new Date();

  return (
    <div className="landingPage">
      <img src={illustration} alt="landing-page-illustration" />
      <div className="container">
        <div className="helloText">
          <h1>I BUILD</h1>
          <h1>SEAMLESS USER INTERFACES FOR WEB AND MOBILE APPS</h1>
          <p>
            Frontend Developer with up to {date.getFullYear() - 2020} years of
            building experience in JavaScript
          </p>
          <p>
            <strong>I believe that, Minimalism is the new complexity.</strong>
          </p>
          <a href="/plans" className="btn btn-white">
            Let's build your project
          </a>
        </div>
        {/* <TechnologyIcons /> */}
      </div>
    </div>
  );
};

export default LandingPage;
