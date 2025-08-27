import React from 'react'

type FAQItem =  {
    id: number | string;
    question: string;
    answer: string;
}

const FaqCard = ({item} : {item: FAQItem}) => {
  return (
    <div className='relative w-[512px] h-[346px] p-[50px] flex items-start justify-start flex-col text-white border border-[var(--color-gray_15)] rounded-2xl  gap-[30px] '>
        <div className='flex flex-col gap-[30px]'>

        <h1 className="text-2xl font-semibold leading-[150%]">{item.question}</h1>
        <p className="text-lg font-medium leading-[150%] text-[var(--color-gray_60)] w-full h-[54px] ">{item.answer}</p>
        </div>
        
        <button className='absolute bottom-13  w-[136px] h-[60px] flex items-center justify-center cursor-pointer bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] text-lg font-medium leading-[130px] rounded-2xl '>Read More</button>
    </div>
  )
}

export default FaqCard