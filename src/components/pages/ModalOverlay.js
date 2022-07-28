import React from 'react'
import pic from "../../resources/sample-works/web/work.jpg"


export const ModalOverlay = ({params})=> {

  const {eachItem} = params;

return <div className="modal_overlay">

  <a href={`/portfolio`}> <span className="close">&times;</span></a>

  <img src={pic} className="modal-img" alt="modal_image"/>
  <div id="caption">
  <h2>{eachItem}</h2>
  <p>{eachItem} is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </div>
</div>

}



