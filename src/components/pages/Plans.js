import React from 'react'
import mobile from '../../resources/images/workType/mobile.svg'
import pc from '../../resources/images/workType/pc.svg'
import graphics from '../../resources/images/workType/graphics.svg'
import arrow  from '../../resources/arrow.svg'
import price_tag from '../../resources/price-tag.svg'


const Plans = ()=> <div className='container'>
<div className="plans">

<h1>My line of work</h1>

<div className="plans_box">
<span>
<div className="plan">
<img id="web" src={pc} alt="mobile_pic"/>
<h1>Web</h1>
<ul>
    <li> <h3>Great Landing-Pages</h3> </li>
    <li> <h3>Responsive Designs</h3> </li>
    <li> <h3>SEO Friendly</h3> </li>
    <li className='price'><img src={price_tag}  alt='price_img'/> </li>
</ul>
</div>
</span>
<span>
<div className="plan">
    <img id="mobile" src={mobile} alt="mobile_pic"/>
<h1>Mobile</h1>
<ul>
    <li> <h3>Android & IOS Apps</h3> </li>
    <li> <h3>"Easy to Navigate" UI</h3> </li>
    <li> <h3>Fast Interactivity</h3> </li>
    <li> <h3>Simple & scalable</h3> </li>
    <li><img src={price_tag}  alt='price_img'/></li>
</ul>
</div>
</span>

<span>
<div className="plan">
<img id='design' src={graphics} alt="mobile_pic"/>
<h1>Design</h1>
<ul>
    <li> <h3>Simple But Fully Communicative</h3> </li>
    <li> <h3>Straight to the point</h3> </li>
    <li> <h3>Best Colors & Textures</h3> </li>
    <li><img style={{width:"-webkit-fill-available", padding:"0 20px"}} src={price_tag}  alt='price_img'/> </li>
</ul>
</div>
</span>
        </div>
<h4><a href='https://frankkyakusse.com/portfolio'>
    references from my portfolio <img  src={arrow} alt="arrow" /></a></h4>
</div>
</div>




export default Plans;



