import React, { useEffect, useState } from "react";

import '../powerups/ProjectSection.css'
import Screen from "./Screen";





export const ProjectSection = () => {
    const [project, setProject] = useState(0)
    const [title, setTitle] = useState(null)
    const [year, setYear] = useState(null)
    const [description, setDescription] = useState(null)
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(true)





    useEffect(() => {
        async function fetchFunction() {
            try {
              const response = await fetch('/projectsData.json');
              if (response.ok) {
                const data = await response.json()
                setTitle(data[project].title)
                setYear(data[project].year)
                setDescription(data[project].description)
                setImg(data[project].frontImg)
    
            } else {
                console.log('Response error')
              }
            } catch (error) {
              console.log('Hubo un problema con la petición Fetch:' + error.message);
            }
          }
          fetchFunction();
    }, [project])


    useEffect(() => {
        setLoading(false)
    }, [])
    
    
    
        
        if(loading) {
            return <h1 className="loading">Loading</h1>
        }
        else {
            
        return (
        <div className="skillsSection">
            <div className="projectSection">
                <Screen title={title} year={year} description= {description} img={img} ></Screen>
                </div>  
            <div className="controlersSection">
                <div className="upButton" onClick={() => {
                    if(project >= 2){
                        setProject (2)
                    }
                    else {
                        setProject(project + 1)
                    }
                }}></div>
                <div className="downButton" onClick={() => {
                    if(project <= 0) {
                        setProject(0)
                    }
                    else {
                        setProject( project - 1)
                    }
                }}></div>
            </div>
        </div>
        )
            }
}



export default ProjectSection