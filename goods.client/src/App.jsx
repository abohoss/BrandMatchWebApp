import React from 'react'
import MyNavbar from './Components/MyNavbar'
import Myfooter from './Components/Myfooter'
import Hero from './Components/Hero'
import WithFadeIn from './Components/WithFadeIn'

const FadedHero = WithFadeIn(Hero);

const App = () => {
    return (
        <>
            <MyNavbar />
            <FadedHero />
            <Myfooter />
        </>
    )
}

export default App