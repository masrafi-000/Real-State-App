import { DecisionsCardData } from '@/utils/data'
import React from 'react'
import ServiceCard from '../Card/ServiceCard'

const Decisions = () => {
  return (
    <div className=' container mx-auto py-[80px] text-white'>
        <div className='w-full grid grid-cols-3 gap-[20px]'>

            <div className='flex flex-col items-center justify-center gap-[50px] col-span-1 '>
                <div>
                    <h1 className=' text-5xl '>Smart Investments, Informed Decisions</h1>
                    <p>{`Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.`}</p>
                </div>
                <div className='w-[500px] p-[50px] border border-[var(--color-gray_15)] bg-[var(--color-gray_10)] shadow-2xl flex flex-col items-start justify-between gap-[30px] rounded-2xl ' >
                    <h2 className='text-2xl font-bold leading-[150%] '>Unlock Your Investment Potential</h2>
                    <p className=' text-lg font-medium leading-[150%] text-[var(--color-gray_60)] '>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                    <button className='text-lg font-normal leading-[150%] w-full h-[62px] rounded-xl border border-[var(--color-gray_10)] bg-[var(--color-gray_08)] flex items-center justify-center shadow-2xl hover:bg-purple-600 transition-all duration-300  '>Learn More</button>
                </div>
            </div>
            <div className='col-span-2 grid grid-cols-2 gap-4'>
                {
                    DecisionsCardData.map((items) => {
                        return (
                            <ServiceCard key={items.id} icon={items.icon} title={items.title} desc={items.desc} />
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default Decisions