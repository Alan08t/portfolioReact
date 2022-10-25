import React, {  StrictMode } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar'
import  Footer  from './components/footer/Footer';
import Main from '../src/Main'
import { useState } from 'react';
import LandingPage from './components/landing/LandingPage';


//////////////////////////////////////
//active window config


const App = () => {

const [active, setActive] = useState('LandingPage');
const [start, setStart] = useState(false)

const actualMain = (state) => {
    setActive(state)
    console.log(state , 3, 'app')


}

const initPressed = () => {
  setStart(true)
}

    return(
  


    <StrictMode >

    { start === false ? 

    <LandingPage start={initPressed} /> :
    <React.Fragment>
      <NavBar navBarMessage={actualMain} />
      <Main displayMain={active} ></Main>
      <Footer />
    </React.Fragment>
    }

    </StrictMode>

    )  
}


export default App