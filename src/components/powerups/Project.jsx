import React from "react";
import './Project.css'
import '../../../public/projectsData.json'




const Project = ({title, year, description, img, url}) => {


    return  (
        <div className="project">
        <div className="imgSection"><a href={url} target='_blank' ><img alt="Project" src={img} className="projectImg"></img></a></div>
        <div className="projectTitleSection"><span className="projectTitle">{title}</span></div>
        <h3 className="projectYear">{year}</h3>
        <p className="projectDescription">{description}</p>
        </div>
    )
}



export default Project