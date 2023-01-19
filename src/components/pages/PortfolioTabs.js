import React, {useState} from 'react'
import SingleWork from './SingleWork'

const PortfolioTabs =()=> {
 
  const arry = { "web": ["website", "web app", "native app", "desktop app","website", "web app", "native app", "desktop app","website", "web app", "native app", "desktop app","website", "web app", "native app", "desktop app" ],  "graphics": ["logo design",  "portfolio design", "poster design"] }

  const [ data, setData ] = useState(arry.web)
  
    const webclassName = data[0] === arry.web[0] ? 'active-tab' : ''
    const graphicsclassName = data[0] === arry.graphics[0] ? 'active-tab' : ''
    
  return <>
        <div className="tabs">
  <button onClick={()=> setData(arry.web)} id="web" className={`${ webclassName } active`}>WEB DEVELOPMENT</button>
  <button onClick={()=> setData(arry.graphics)} id="graphics" className={`${graphicsclassName} active`}>DESIGN</button>
        </div> 

<div className="tabcontent">
<section className="port_box">
{data.map( (eachItem, index) => <SingleWork key={index} eachItem={eachItem} /> )}


</section>

</div>
</>
}

export default PortfolioTabs;