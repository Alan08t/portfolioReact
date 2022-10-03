import React from "react";
import './FooterArrow.css'





const FooterArrow = () => {






    return (
        <div onClick={() => {
                            window.scrollTo(0, document.body.scrollTop);
            }
        } className="footerArrow"></div>
    )
}



export default FooterArrow