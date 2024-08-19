import React from 'react'
import MyNavbar from './Components/MyNavbar'
import Myfooter from './Components/Myfooter'
import Hero from './Components/Hero'
import WithFadeIn from './Components/WithFadeIn'
import AboutUs from './Components/AboutUs'
import HowToStart from './Components/Marquee/HowToStart'

const FadedHero = WithFadeIn(Hero);


const App = () => {
    return (
        <>
            <MyNavbar />
            <FadedHero />
            <AboutUs />
            <HowToStart />
            <Myfooter />
        </>
    )
}

export default App