import React, { useEffect, useState } from "react";
import './Letter.css'



const Letter = (props) => {



    const [classes, setClasess] = useState('')
    const [display, setDisplay] = useState(false)

    const displayLetter = () => {
        setClasess('letterContainerActive')
        console.log(classes)
    }

    useEffect(() => {
        setTimeout(() => {
            displayLetter()
            setDisplay(true);
          }, 1550,[])
          
    })
    return (

        display ? <div className={classes}>
        <span className="letter">{props.letter}</span>
    </div> : null
        
    )
}



export default Letter