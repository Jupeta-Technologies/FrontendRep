import React from 'react'
import {Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar } from '../components';
import NewnavBar from '../components/NewnavBar';
import SellButton from '../components/SellButton';
import AllCategories from '../components/AllCategories';

const HomePage = () => {
  return (
    <div>
      <NewnavBar />
      <Hero/>
      <SubNavbar />
      <SellButton />
      <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <NewArrival />
        <DailyDeals />
        <SignUp />
      </div>
      </div>
      <div className="bgPrimary flexStart">
      <div className="boxWidth">
        <Footer />
      </div>
    </div>
        {/*<Navbar 
  
  <div className="bgPrimary paddingX flexStart">
    <div className="boxWidth">
      <div></div>
        
      </div>
    </div>
    <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <ExploreBestSelling />
        <HolidaySale />
      </div>
    </div>
    <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <WhatIsTrending />
        <NewArrival />
        <DailyDeals />
        <SignUp />
      </div>
    </div>
   />*/}
    </div>
  )
}

export default HomePage