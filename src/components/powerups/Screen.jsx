import React from "react";
import './Screen.css'
import Project from "./Project";


const Screen = ({title, year, description, img, url}) => {





    return (
        <div className="screen">
        <Project url={url} title={title} year={year} description={description} img={img} />
        </div>
    )
}




export default Screen