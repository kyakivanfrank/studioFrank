import React, {useContext} from "react"

import { GlobalContext }  from "../../Context/GlobalState"



export default ()=>{
    const { buttonToggler, toggleAction } = useContext(GlobalContext)

    return <>
    <div style={{ display: buttonToggler.on  ? 'block' : 'none', transition:'display 1s' }}  className='overlay'>

        <div onClick={()=>  toggleAction({on : !buttonToggler.on })} className="closable clicked">
<div className={`bar1`}></div>
<div className={`bar2`}></div>
<div className={`bar3`}></div>
    </div>

<ul>
    <li><a href="/plans"><h3>plans</h3></a></li>
    <li><a href="/about"><h3>about</h3></a></li>
    <li><a href="/portfolio"><h3>portfolio</h3></a></li>
    <li><a disabled href="/contact"><h3>contact us</h3></a></li>
</ul>
</div>
</>

}