import React from 'react';
import '../navBar/NavButton.css'
import PowerUps from '../powerups/PowerUps';

const NavButton = (props) => {



    return (
        <button onClick={() => {
            window.open('https://www.linkedin.com/in/alan-torino/')
        }} value={<PowerUps />} className='navBar-button'>
            <span className="navBar-text">
                {props.name}
            </span>
        </button>




    )
}


export default NavButton