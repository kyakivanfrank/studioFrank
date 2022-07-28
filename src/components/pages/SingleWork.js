import React from "react"
import workImage from "../../resources/project_images/projectOne.jpg"


export default ({eachItem})=>{


    return <a href={`/portfolio/${eachItem}`}>
    <div  className="work">

    <h3>{eachItem}</h3>
    <img src={workImage} alt="WorkIMG"/>

    </div>
    </a>
}

