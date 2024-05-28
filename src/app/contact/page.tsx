import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import React from 'react'

const contactPage = () => {
  return (
    <>
    <Nav />
      <main>
        <Contact />
      </main>
    <Footer />
    </>
  )
}

export default contactPage