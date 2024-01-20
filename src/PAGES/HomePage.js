import React from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar,Tiles,Grid } from '../components';
import JupetaECnavBar from '../components/JupetaECnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';

const HomePage = () => {

  return (
    <>

      <Hero/>
      <JupetaECnavBar/>
      <Grid/>
      <ExploreBestSelling />
      <Tiles />
      <SellButton />
      <DailyDeals />
      {/* <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
         <DailyDeals />
      </div>
      </div> 
      <div className="bgPrimary flexStart">
      <div className="boxWidth">*/}
        <Footer />
    </>
  )
}

export default HomePage