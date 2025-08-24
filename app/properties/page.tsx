import AllProperties from '@/Components/Properties/AllProperties'
import PropertiesAllSearch from '@/Components/Properties/PropertiesAllSearch'
import SerLanding from '@/Components/Services/SerLanding/SerLanding'
import React from 'react'

const Properties = () => {
  return (
    <main className='bg-[var(--color-gray_08)] w-full '>
      <SerLanding />
      <PropertiesAllSearch />
      <AllProperties />
    </main>
  )
}

export default Properties