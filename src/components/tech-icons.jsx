import React from 'react';
import  figma_icon_url from "../resources/tech_icons/figma.png"
import  firebase_icon_url from "../resources/tech_icons/firebase.jpg"
import  ai_icon_url from "../resources/tech_icons/illustrator.png"
import  photoshop_icon_url from "../resources/tech_icons/photoshop.png"
import  js_icon_url from "../resources/tech_icons/javascript.png"
import  react_icon_url from "../resources/tech_icons/react.png"

const icons = [
    { name: 'Figma', icon: figma_icon_url },
    { name: 'Firebase', icon: firebase_icon_url },
    { name: 'Adobe Illustrator', icon: ai_icon_url },
    { name: 'Photoshop', icon: photoshop_icon_url },
    { name: 'JavaScript', icon: js_icon_url },
    { name: 'React', icon: react_icon_url },
  ];
  
  
const TechnologyIcons = () => {
  return (
    <div >
    <div className="flex flex-wrap relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none backdrop-blur-md"></div>
      {icons.map((tech, index) => (
        <div key={index} className="w-1/4 p-4" title={tech.name}>
            <img src={tech.icon} alt={tech.name} className="h-16 mx-auto" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default TechnologyIcons;
