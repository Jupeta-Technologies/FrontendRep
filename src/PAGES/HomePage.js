import React from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar,Tiles } from '../components';
import NewnavBar from '../components/JupetaECnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';

const HomePage = () => {
  return (
    <>
      <Hero/>
      <NewnavBar />
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