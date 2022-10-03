import React, { useEffect, useState } from "react";
import './MainLandingPage.css'
import Letter from "./Letter";


const MainLandingPage = () => {

    const [classes, setClasses] = useState('mainLandingPage')
    const [active, setActive] = useState(false)




    useEffect(() => {
        setClasses('mainLandingPage active')
        setActive(true)
        },[]
    
    )



    return (
        active ?
        <div className={classes}>
            <Letter letter='W'/>
            <Letter letter='E'/>
            <Letter letter='L'/>
            <Letter letter='C'/>
            <Letter letter='O'/>
            <Letter letter='M'/>
            <Letter letter='E'/>
   
        </div> : null
    )
}


export default MainLandingPage