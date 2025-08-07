import HeroCard from '@/Components/Home/Hero/HeroCard'
import Decisions from '@/Components/Services/Decisions/Decisions'
import PropertyManagement from '@/Components/Services/Management/PropertyManagement'
import PropertiesValue from '@/Components/Services/PropertiesValue/PropertiesValue'
import SerLanding from '@/Components/Services/SerLanding/SerLanding'
import React from 'react'

const Service = () => {
  return (
    <div className='bg-[var(--color-gray_08)]'>
      <SerLanding />
      <HeroCard className='flex bg-[var(--color-gray_08)] flex-wrap gap-6 items-center justify-center p-[20px] border-2 border-[var(--color-gray_15)]  shadow-2xl hover:shadow transition-all duration-300 ' />
      <PropertiesValue />
      <PropertyManagement />
      <Decisions />
    </div>
  )
}

export default Service