import React, { useEffect, useState } from "react";
import './Screen.css'
import Project from "./Project";


const Screen = ({title, year, description, img}) => {





    return (
        <div className="screen">
        <Project title={title} year={year} description= {description} img={img} />
        </div>
    )
}




export default Screen