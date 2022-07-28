import React from "react"

// import heroPic  from "../../resources/images/frank.jpg"
import heroPic1  from "../../resources/images/frankI.png"


export default ()=> <div className="about">

<h1>About <span style={{fontWeight:"300"}}>studio</span>Frank</h1>

<div className="hero_details" >

    <div className="hero_pic">
        <img style={{width: "100%"}} src={heroPic1} alt="heroPic"/>
    </div>

    <span>
        <p>First of all Lemme introduce myself, I'm Kyakusse Frank Ivan. A professional Web developer/designer who focuses mostly on the front-end( user interfaces ) and am the sole ideologist of studio<b>Frank</b> </p>
       <p>To me, this is simply a virtual office location where am able to connect with entreprenuers/ clients so we could work together and implement their ideas to the internet.
           Here you'd be able to know what i'd put on your table.
       </p>
       <p>
           "i learned that in our era many people live and work mostly by clinging on their phones. this has both effects, but i think it's kinda cool. 
           because it exercises their thumb fingers <em>(LOL)</em> and you realize in this action, their <em>thumbs</em> are <em> at work</em>. That's actually the idea behind the platform's name and Logo"
       </p>

       <p>Feel free to check out our works and communicate what we could do</p>
    
       </span> 
</div>



</div>