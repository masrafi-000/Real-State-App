import HeroCard from '@/Components/Home/Hero/HeroCard'
import PropertiesValue from '@/Components/Services/PropertiesValue/PropertiesValue'
import SerLanding from '@/Components/Services/SerLanding/SerLanding'
import React from 'react'

const Service = () => {
  return (
    <div className='bg-[var(--color-gray_08)]'>
      <SerLanding />
      <HeroCard className='flex bg-[var(--color-gray_08)] flex-wrap gap-6 items-center justify-center p-[20px] border-2 border-[var(--color-gray_15)]  shadow-2xl hover:shadow transition-all duration-300 ' />
      <PropertiesValue />
    </div>
  )
}

export default Service