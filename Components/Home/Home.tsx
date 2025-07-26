import React from 'react'
import Hero from './Hero/Hero'
import Navbar from '../Navbar/Navbar'
import FeaturedProperties from './FeaturedProperties/FeaturedProperties'
import Testimonials from './Testimonial/Testimonials'
import Faq from './FAQ/Faq'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className="w-full h-auto bg-[var(--color-gray_08)] ">
      <Navbar />
      <Hero />
      <FeaturedProperties slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} options={{ loop: false }} />
      <Testimonials slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} options={{ loop: false }} />
      <Faq slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} options={{ loop: false }} />
      <Footer/>
    </div>
  )
}

export default Home