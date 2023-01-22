import React from 'react'
import pic from "../../resources/sample-works/web/work.jpg"
import portfolio_data from '../portfolio_data'


const ModalOverlay = ({params})=> {
  const {eachItem, index, active_tab} = params;
  const item = portfolio_data[active_tab][index]

return <div className="modal_overlay">
  <a href={`/portfolio`}> <span className="close">&times;</span></a>

  <img src={item.project_image} className="modal-img" alt="modal_image"/>
  <div id="caption">
  <h2>{item.project_name}</h2>
  <p>{item.project_description}</p>
  </div>
</div>

}

export default ModalOverlay;



