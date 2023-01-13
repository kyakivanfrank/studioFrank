import React from 'react'
import mobile from '../../resources/images/workType/mobile.svg'
import pc from '../../resources/images/workType/pc.svg'
import graphics from '../../resources/images/workType/graphics.svg'


const Plans = ()=> <div className="plans">


<h1>Let's build it for you</h1>

<div className="plans_box">
<span>
<div className="plan">
    <img id="mobile" src={mobile} alt="mobile_pic"/>
<h1>Mobile</h1>
<ul>
    <li> <h2>price  </h2> </li>
    <li> <h2>storage  </h2> </li>
    <li> <h2>performance </h2> </li>
    <li> <h2>mainteinance </h2> </li>
</ul>
</div>
</span>

<span>
<div className="plan">
<img id="web" src={pc} alt="mobile_pic"/>
<h1>Web</h1>

<ul>
    <li> <h2>price  </h2> </li>
    <li> <h2>storage  </h2> </li>
    <li> <h2>performance </h2> </li>
    <li> <h2>mainteinance </h2> </li>
</ul>
</div>
</span>

<span>
<div className="plan">
<img id='design' src={graphics} alt="mobile_pic"/>
<h1>Design</h1>
<ul>
    <li> <h2>price  </h2> </li>
    <li> <h2>storage  </h2> </li>
    <li> <h2>performance </h2> </li>
    <li> <h2>mainteinance </h2> </li>
</ul>
</div>
</span>
        </div>

</div>


export default Plans;



