import React from 'react'
import mobile from '../../resources/images/workType/mobile.svg'
import pc from '../../resources/images/workType/pc.svg'
import graphics from '../../resources/images/workType/graphics.svg'
import arrow  from '../../resources/arrow.svg'


const Plans = ()=> <div className='container'>
<div className="plans">

<h1>Let's build it for you</h1>

<div className="plans_box">
<span>
<div className="plan">
    <img id="mobile" src={mobile} alt="mobile_pic"/>
<h1>Mobile</h1>
<ul>
    <li> <h3>price  </h3> </li>
    <li> <h3>storage  </h3> </li>
    <li> <h3>performance </h3> </li>
    <li> <h3>mainteinance </h3> </li>
</ul>
</div>
</span>

<span>
<div className="plan">
<img id="web" src={pc} alt="mobile_pic"/>
<h1>Web</h1>

<ul>
    <li> <h3>price  </h3> </li>
    <li> <h3>storage  </h3> </li>
    <li> <h3>performance </h3> </li>
    <li> <h3>mainteinance </h3> </li>
</ul>
</div>
</span>

<span>
<div className="plan">
<img id='design' src={graphics} alt="mobile_pic"/>
<h1>Design</h1>
<ul>
    <li> <h3>price  </h3> </li>
    <li> <h3>storage  </h3> </li>
    <li> <h3>performance </h3> </li>
    <li> <h3>mainteinance </h3> </li>
</ul>
</div>
</span>
        </div>
<h4><a href='http://localhost:3000/portfolio'>
    Check reference from my portfolio <img src={arrow} alt="arrow" /></a></h4>
</div>
</div>




export default Plans;



