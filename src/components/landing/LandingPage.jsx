import React from "react";
import ButtonLandingPage from "./ButtonLandingPage";
import '../landing/LandingPage.css'
import MainLandingPage from "./MainLandingPage";
import { useState, useEffect } from "react";






const LandingPage = (props) => {


    const[active, setActive] = useState(false) 

    const pressStart = () => {
        setActive(true)
        console.log(active, 'se presiono start')
    }






    useEffect(() => {
        if(active){
            props.start()
        }
    },[active])





    return (
    <div className="landingPage">
        <div className="mainSection">
        <MainLandingPage/>
        </div>
        <div className="buttonSection">
        <ButtonLandingPage start={pressStart}/>
        </div>
    </div>
    )


    }
export default LandingPage