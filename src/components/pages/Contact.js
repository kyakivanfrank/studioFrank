import React from 'react'
import facebook from "../../resources/images/socialMedia/facebook.svg"
import whatsapp from "../../resources/images/socialMedia/whatsapp.svg"
import twitter from "../../resources/images/socialMedia/twitter.svg"
import linkedIn from "../../resources/images/socialMedia/linkedIn.svg"

 const Contact = () => <div className='container'>
       <div className="contact">
            <h1>Reach out to Me</h1>


            <h3>Email: kyakivanfrank@gmail.com</h3>
            <h3>call: +256-708-481316</h3>

<div className="socialIcons">
<a href="https://www.facebook.com/frankIvanplusplus/"><img src={facebook} alt="facebook"/> </a>
<a href="https://twitter.com/chaku_ii"><img src={twitter} alt="twitter"/> </a>
<a href="https://wa.me/256708481316"><img src={whatsapp} alt="whatsapp"/> </a>
<a href="https://www.linkedin.com/in/FrankIvanKyakusse"><img src={linkedIn} alt="whatsapp"/> </a>
        </div></div>

 </div>
 
export default Contact;