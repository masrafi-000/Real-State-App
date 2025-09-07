import ContactCard from '@/components/shared/Contact/ContactCard'
import ContactForm from '@/components/shared/Contact/ContactForm'
import ContactHero from '@/components/shared/Contact/Hero'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactCard />
      <ContactForm />
    </div>
  )
}

export default Contact