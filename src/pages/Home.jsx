import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSection from '../components/ui/Seller-section/SellerSection'
import StepSection from '../components/ui/Step-section/StepSection'
import TrendingSection from '../components/ui/Trending-section/TrendingSection'

const Home = () => {
  return <>
    <HeroSection/>
    <LiveAuction/>
    <SellerSection/>
    <TrendingSection/>
    <StepSection/>
  </>
}

export default Home