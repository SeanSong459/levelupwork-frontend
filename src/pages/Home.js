import React from 'react'

import NavbarHome from '../components/HomePage/NavbarHome'
import HomePageContent1 from '../components/HomePage/HomePageContent1'
import HomePageContent2 from '../components/HomePage/HomePageContent2'
import HomePageContent3 from '../components/HomePage/HomePageContent3'
import HomePageContent4 from '../components/HomePage/HomePageContent4'
import Footer from '../components/HomePage/HomeFooter'



const Home = () => {

  return (
    <>
      <div>
          <NavbarHome/>
          <HomePageContent1/>
          <HomePageContent2/>
          <HomePageContent3/>
          <HomePageContent4/>
          <Footer/>
      </div>
    </>
  )
}
export default Home
