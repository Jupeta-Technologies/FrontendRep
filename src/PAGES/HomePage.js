import React from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar,Tiles } from '../components';
import NewnavBar from '../components/NewnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';

const HomePage = () => {
  return (
    <div>
      <NewnavBar />
      <Hero/>
      <SellButton />
      <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <DailyDeals />
      </div>
      </div>
      <div className="bgPrimary flexStart">
      <div className="boxWidth">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default HomePage