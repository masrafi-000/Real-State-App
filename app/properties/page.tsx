import PropertiesAllSearch from '@/Components/Properties/PropertiesAllSearch'
import SerLanding from '@/Components/Services/SerLanding/SerLanding'
import React from 'react'

const Properties = () => {
  return (
    <main className='bg-[var(--color-gray_08)] w-full h-screen'>
      <SerLanding />
      <PropertiesAllSearch />
    </main>
  )
}

export default Properties