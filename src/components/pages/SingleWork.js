import React from "react"
import workImage from "../../resources/project_images/projectOne.jpg"

const SingleWork = ({eachItem, index, active_tab})=>{
    const {project_name, project_image} = eachItem;


    return <a href={`/portfolio/${active_tab}/${index}/${project_name}`}>
    <div  className="work">
    <h3>{project_name}</h3>
    <img src={project_image} alt="Work_IMG"/>
    </div>
    </a>
}

export default SingleWork;
