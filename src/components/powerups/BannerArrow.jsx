import React from "react";
import './BannerArrow.css'



const BannerArrow = (props) => {


    return (
        <div onClick={() => {
            window.scrollTo(0, document.body.scrollHeight);
        }} className="bannerArrow"></div>
    )
}


export default BannerArrow