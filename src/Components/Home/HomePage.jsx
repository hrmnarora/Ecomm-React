import React from 'react'
import HeroSection from './HeroSection'
import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif"
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
        <HeroSection title="Buy Iphone 14 Pro" subtitle="Experiance the power of the latest Iphone 14 with our most pro camera ever" link="/" image={iphone}/>
        <FeaturedProducts/>
        <HeroSection title="Build The ultimate setup" subtitle="you can add dtudio display and colour-matched magic accessories to our bag after configure your Mac Mini" link="/" image={mac}/>
    </div>
  )
}

export default HomePage