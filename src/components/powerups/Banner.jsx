import React, {  useState } from "react";
import '../powerups/Banner.css'
import BannerHeader from "./BannerHeader";
import BannerArrow from "./BannerArrow";


const Banner = () => {



    const [styles, setStyles] = useState("banner container")

return(    


        <div className={styles}>
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