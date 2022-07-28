import React, {useContext} from "react"
import Logo from "../../resources/studioFrank_logo_white.svg"

import { GlobalContext } from "../../Context/GlobalState"


export default ()=> {

    const { buttonToggler, toggleAction } = useContext(GlobalContext)

return <header>
<div className="header">
    <a href="/"><div className="logo"><h2>studio<b>Frank</b></h2>
     <img  src={Logo} alt="StudioFrank_logo"/>
    </div></a>

    <div onClick={()=>  toggleAction({on : !buttonToggler.on })} style={{ display: !buttonToggler.on ? 'block' : 'none', transition:'display 1s'}} className="menuClickable">
<div className={`bar1`}></div>
<div className={`bar2`}></div>
<div className={`bar3`}></div>
    </div>
    

   </div>
   </header>
   }


