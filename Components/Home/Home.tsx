import React from 'react'
import Hero from './Hero/Hero'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="w-full h-auto bg-[var(--color-gray_08)] ">
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home