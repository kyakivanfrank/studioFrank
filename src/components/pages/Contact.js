import React from 'react'
import facebook from "../../resources/images/social/facebook.svg"
import whatsapp from "../../resources/images/social/whatsapp.svg"
import twitter from "../../resources/images/social/twitter.svg"
import linkedIn from "../../resources/images/social/linkedIn.svg"

 const Contact = () => <div className='container'>
       <div className="contact">
            <h1>Reach out to Us</h1>


            <h3>Email: kyakivanfrank@gmail.com</h3>
            <h3>call: 0708481316</h3>

<div className="socialIcons">
<a href="https://www.facebook.com/frankIvanplusplus/"><img src={facebook} alt="facebook"/> </a>
<a href="https://twitter.com/chaku_ii"><img src={twitter} alt="twitter"/> </a>
<a href="https://wa.me/256708481316"><img src={whatsapp} alt="whatsapp"/> </a>
<a href="https://ug.linkedin.com/in/kyakusse-frank-ivan"><img src={linkedIn} alt="whatsapp"/> </a>
        </div></div>

 </div>
 
export default Contact;