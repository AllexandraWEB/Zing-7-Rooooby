import React from 'react'
import MultiArticle from './MultiArticle'
import ArticleMarketingBlog from './ArticleMarketingBlog'
import ArticleMoreBlog from './ArticleMoreBlog'

const ArticleBlog = () => {
  return (
    <section className='w-full h-[6250px] md:h-[3000px] overflow-hidden'>
        <div className='regular-container h-full'>
            <div className='w-[350px] md:w-full h-[370px] my-[120px] flex mx-auto md:mx-0'>
                <div className=''>
                    <div className='w-[350px] md:w-[555px] border-t-[2px] mr-0 md:mr-[30px] pt-[24px] border-b-[2px]'>
                    <span className='text-[14px] font-bold tracking-[1.4px] uppercase text-border-grey'>Service</span>
                    <h1 className='text-[30px] md:text-[40px] leading-[35px] md:leading-[50px] tracking-[-0.56px] font-bold mt-[16px] cursor-pointer'>The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</h1>
                    <p className='text-[16px] mt-[110px] pb-[18px]'>05 Sep 2024, <span className='text-border-grey'> by  Maxwell Iskiev</span></p>
                    </div>
                </div>
                <div>
                    <img 
                    src="Article-Image.svg" 
                    alt="Image-1" />
                </div>
                
            </div>
            <div className='w-[350px] md:w-full mx-auto'>
                    <MultiArticle />
            </div>
            <div className='mt-[50px] md:mt-[120px]'>
                   <ArticleMarketingBlog />
            </div>

            <div className='md:mt-[120px] w-[350px] md:w-full mx-auto'>    
                    <ArticleMoreBlog />
            </div>
          </div>
        </section>
  )
}

export default ArticleBlog