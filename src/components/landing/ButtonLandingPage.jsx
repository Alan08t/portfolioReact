import React, { useEffect, useState } from "react";
import '../landing/ButtonLandingPage.css'




const ButtonLandingPage = (props) => {


    const [display, setDisplay] = useState(false)


    useEffect(() => {
        setInterval(() => {
            setDisplay(true)
        }, 2300)
    },[])


  
    return (
        display ?
        <React.Fragment>
            <button className="buttonLandingPage" onClick={props.start} >START</button>
        </React.Fragment> : null
    )
}


export default ButtonLandingPage