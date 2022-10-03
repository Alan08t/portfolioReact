import React from "react";
import './Project.css'
import '../../../public/projectsData.json'




const Project = ({title, year, description, img}) => {


    return  (
        <div className="project">
        <div className="imgSection"><img src={img} role='image' className="projectImg"></img></div>
        <div className="projectTitleSection"><span className="projectTitle">{title}</span></div>
        <h3 className="projectYear">{year}</h3>
        <p className="projectDescription">{description}</p>
        </div>
    )
}



export default Project