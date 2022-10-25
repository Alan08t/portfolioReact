import React from "react";
import '../powerups/Banner.css'
import BannerHeader from "./BannerHeader";
import BannerArrow from "./BannerArrow";


const Banner = () => {


return(    


        <div className='banner container'>
            <div className="bannerHeaderContainer">
                <BannerHeader/>
            </div>
            <div className='bannerFooterContainer'>
                <BannerArrow/>
            </div>
        </div>

    )


}


export default Banner