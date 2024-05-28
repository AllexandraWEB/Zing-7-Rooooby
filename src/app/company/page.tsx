import CompanySection from '@/components/layout/CompanySection'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import React from 'react'

const companyPage = () => {
  return (
    <>
    <Nav />
      <main>
          <CompanySection />
      </main>
    <Footer />
    </>
  )
}

export default companyPage