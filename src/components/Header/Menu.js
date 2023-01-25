import React, {useContext} from "react"

import { GlobalContext }  from "../../Context/GlobalState"



const Menu=()=>{
    const { buttonToggler, toggleAction } = useContext(GlobalContext)

    return <>
    <div style={{ display: buttonToggler.on  ? 'block' : 'none', transition:'display 1s' }}  className='overlay'>

        <div onClick={()=>  toggleAction({on : !buttonToggler.on })} className="closable clicked">
<div className={`bar1`}></div>
<div className={`bar2`}></div>
<div className={`bar3`}></div>
    </div>

<ul>
    <li><a href="/plans"><h3>Line of work</h3></a></li>
    <li><a href="/about"><h3>About</h3></a></li>
    <li><a href="/portfolio"><h3>Portfolio</h3></a></li>
    <li><a disabled href="/contact"><h3>Contact me</h3></a></li>
</ul>
</div>
</>

}

 export default Menu;