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
      <Tiles />
      <SellButton />
        <Footer />
    </>
  )
}

export default HomePage