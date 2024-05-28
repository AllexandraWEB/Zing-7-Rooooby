import React from 'react'

const ArticleMarketingBlog = () => {
  return (
    <section className='w-full h-[1315px] md:h-[600px] overflow-hidden'>
        <div className='regular-container flex flex-wrap flex-col md:flex-row gap-[50px] md:gap-[26px] text-center md:text-start'>
             <div>
                <div className='w-[350px] md:w-[555px] mx-auto'>
                    <span className='text-[14px] font-bold tracking-[1.4px] uppercase text-border-grey'>marketing</span>
                    <div className='mt-[16px]'>
                         <img 
                          src="Big-Article-Img.svg" 
                          alt="Big-Article-Img" 
                          className='border-t-[1.5px] border-border-grey pt-[24px]'/>
                    </div>
                    <h1 className='text-[30px] md:text-[32px] leading-[35px] md:leading-[42px] tracking-[-0.44px] font-bold mt-[24px] cursor-pointer'>Email marketing best practices: 10 experts share their email tips</h1>
                    <p className='text-[16px] mt-[20px] pb-[18px]'>05 Sep 2024, <span className='text-border-grey'> by  Maxwell Iskiev</span></p>
                </div>
             </div>

             <div className='mx-auto md:mx-0 md:mt-[40px]'>
                <div className='w-[350px] md:w-[555px] md:h-[137px] border-t-[1.5px] border-border-grey'>
                    <h1 className='md:w-[457px] text-[24px] leading-[34px] tracking-[-0.33px] pt-[16px] font-bold cursor-pointer'>Access Roooby leads features on your mobile</h1>
                    <div className='flex flex-col md:flex-row gap-[25px] md:gap-[246px] mt-[28px]'>
                        <p className='text-[16px] font-medium'>11 Aug 2023, <span className='text-border-grey'> by Joshua Nash</span></p>
                        <p className='text-[14px] font-bold tracking-[1.4px] uppercase text-border-grey'>product</p>
                    </div>
                </div>
                <div className='w-[350px] md:w-[555px] md:h-[137px] mt-[50px] border-t-[1.5px] border-border-grey'>
                    <h1 className='md:w-[457px] text-[24px] leading-[34px] tracking-[-0.33px] pt-[16px] font-bold cursor-pointer'>Sales presentations: templates, examples and ideas on how to present like a pro</h1>
                    <div className='flex flex-col md:flex-row gap-[25px] md:gap-[285px] mt-[28px]'>
                        <p className='text-[16px] font-medium'>11 Oct 2022, <span className='text-border-grey'> by Laura Ryan</span></p>
                        <p className='text-[14px] font-bold tracking-[1.4px] uppercase text-border-grey'>Sales</p>
                    </div>
                </div>
                <div className='w-[350px] md:w-[555px] md:h-[137px] mt-[70px] border-t-[1.5px] border-border-grey'>
                    <h1 className='md:w-[357px] text-[24px] leading-[34px] tracking-[-0.33px] pt-[16px] font-bold cursor-pointer'>How To Deliver a Successful Product Launch</h1>
                    <div className='flex flex-col md:flex-row gap-[25px] md:gap-[236px] mt-[28px]'>
                        <p className='text-[16px] font-medium'>30 Jan 2022, <span className='text-border-grey'> by Alice Washington</span></p>
                        <p className='text-[14px] font-bold tracking-[1.4px] uppercase text-border-grey'>News</p>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default ArticleMarketingBlog