import React from 'react'
import facebook from "../../resources/images/facebook.png"
import whatsapp from "../../resources/images/whatsapp.png"
import twitter from "../../resources/images/twitter.png"

export const Contact = () => {
    return (
        <div className="contact">
            <h1>Reach out to Us</h1>


            <h3>Email: kyakivanfrank@gmail.com</h3>
            <h3>call: 0708481316</h3>

<div className="socialIcons">
<a href="/#"><img src={facebook} alt="facebook"/> </a>
<a href="/#"><img src={twitter} alt="twitter"/> </a>
<a href="/#"><img src={whatsapp} alt="whatsapp"/> </a>
        </div></div>
    )
}
