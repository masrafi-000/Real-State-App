import ContactCard from '@/components/shared/Contact/ContactCard'
import ContactExplore from '@/components/shared/Contact/ContactExplore'
import ContactForm from '@/components/shared/Contact/ContactForm'
import ContactHero from '@/components/shared/Contact/Hero'
import OfficeLocation from '@/components/shared/Contact/OfficeLocations'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactCard />
      <ContactForm />
      <OfficeLocation />
      <ContactExplore/>
    </div>
  )
}

export default Contact