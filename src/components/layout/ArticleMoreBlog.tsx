import React from 'react'

const ArticleMoreBlog = () => {
  return (
    <section className='w-full h-[1400px] md:h-[461px] overflow-hidden'>
    <div className='regular-container flex flex-wrap flex-col md:flex-row gap-[50px] md:gap-[26px] text-center md:text-start'>
        <div className='w-[350px] md:w-[361px] h-[427px] '>
            <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>Service</span></p>
            <div className='pt-[24px]'>
                <img 
                src="Article-Img-7.svg" 
                alt="Image-1" />
            </div>
            <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>Sales Funnels: Definition, Process, Stages and Examples</h1>
            <p className='mt-[20px]'>01 Dec 2022, <span className='text-border-grey'> by Edith Rose</span></p>
        </div>

        <div className='w-[350px] md:w-[361px] h-[427px]'>
            <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>Sales</span></p>
            <div className='pt-[24px]'>
                <img 
                src="Article-Img-8.svg" 
                alt="Image-1" />
            </div>
            <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>What is a sales and how do you build one?</h1>
            <p className='mt-[20px]'>29 Mar 2022, <span className='text-border-grey'> by Amanda Brooks</span></p>
        </div>

        <div className='w-[350px] md:w-[361px] h-[427px]'>
            <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>Services</span></p>
            <div className='pt-[24px]'>
                <img 
                src="Article-Img-9.svg" 
                alt="Image-1" />
            </div>
            <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>10 real estate cold calling scripts to increase lead </h1>
            <p className='mt-[20px]'>27 Dec 2022, <span className='text-border-grey'> by Roxie Sandoval</span></p>
        </div>
    </div>
</section>
  )
}

export default ArticleMoreBlog