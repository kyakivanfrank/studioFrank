import React from 'react'
import facebook from "../../resources/images/facebook.svg"
import whatsapp from "../../resources/images/whatsapp.svg"
import twitter from "../../resources/images/twitter.svg"
import linkedIn from "../../resources/images/linkedIn.svg"

export const Contact = () => {
    return (
        <div className="contact">
            <h1>Reach out to Us</h1>


            <h3>Email: kyakivanfrank@gmail.com</h3>
            <h3>call: 0708481316</h3>

<div className="socialIcons">
<a href="/#"><img src={facebook} alt="facebook"/> </a>
<a href="/#"><img src={twitter} alt="twitter"/> </a>
<a href="https://wa.me/256708481316"><img src={whatsapp} alt="whatsapp"/> </a>
<a href="https://ug.linkedin.com/in/kyakusse-frank-ivan"><img src={linkedIn} alt="whatsapp"/> </a>
        </div></div>
    )
}
