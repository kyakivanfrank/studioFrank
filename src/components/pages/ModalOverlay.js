import React from 'react'
import portfolio_data from '../portfolio_data'


const ModalOverlay = ({params})=> {
  const {index, active_tab} = params;
  const item = portfolio_data[active_tab][index]

return <div className="modal_overlay">
  <a href={`/portfolio`}> <span className="close">&times;</span></a>

  <img src={item.project_image} className="modal-img" alt="modal_image"/>
  <div id="caption">
  <h2>{item.project_name}</h2>
  <div style={{margin:"10px 5px 0 0"}}>
  {item.tools.map((chip, index)=> <span style={{color:"black", backgroundColor:"white",display:"inline-block", padding:"5px 15px",
  margin:"5px 8px 0 0", fontWeight:"bold", borderRadius:"100px"}} 
  key={index}>{chip}</span>)}
  </div>
  <p>{item.project_description}</p>
  </div>
</div>

}

export default ModalOverlay;



