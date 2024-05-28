import ArticleBlog from '@/components/layout/ArticleBlog'
import Footer from '@/components/layout/Footer'
import HeroBlog from '@/components/layout/HeroBlog'
import Nav from '@/components/layout/Nav'
import Supercharge from '@/components/layout/Supercharge'
import React from 'react'

const blogPage = () => {
  return (
    <>
      <Nav />
        <main>
            <HeroBlog />
            <ArticleBlog />
            <Supercharge />
        </main>
      <Footer />
      </>
  )
}

export default blogPage