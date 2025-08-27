import { PorpertiesCardItem } from '@/utils/data'
import React from 'react'
import FeaturedCard from '../Home/FeaturedProperties/FeaturedCard'

const AllProperties = () => {
  return (
    <section className='container mx-auto mt-52'>
        <div className='grid grid-cols-3 space-x-2 space-y-4'>
            {PorpertiesCardItem.map((item) => (
                <FeaturedCard key={item.id} item={item} />
            ))}
        </div>
    </section>
  )
}

export default AllProperties