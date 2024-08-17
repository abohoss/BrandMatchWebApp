import React from 'react'
import MyNavbar from './Components/MyNavbar'
import Myfooter from './Components/Myfooter'
import Hero from './Components/Hero'
import WithFadeIn from './Components/WithFadeIn'
import AboutUs from './Components/AboutUs'

const FadedHero = WithFadeIn(Hero);
const FadedAboutUs = WithFadeIn(AboutUs);

const App = () => {
    return (
        <>
            <MyNavbar />
            <Hero />
            <FadedAboutUs />
            <Myfooter />
        </>
    )
}

export default App