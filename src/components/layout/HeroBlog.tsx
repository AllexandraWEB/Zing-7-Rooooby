import React from 'react'

const HeroBlog = () => {
  return (
    <section className='w-full h-[650px] md:h-[434px] overflow-hidden bg-light-gray'>
        <div className='regular-container h-full'>
            <div className='md:w-[652px] mt-[40px] md:mt-[72px] mx-auto md:mx-0 text-center md:text-start'>
                <h1 className='text-[40px] md:text-[64px] leading-[40px] md:leading-[74px] font-bold'>News and insights <span className='text-border-grey'>from our experts</span>
                </h1>
            </div>
            <div className='w-[350px] mt-[60px] md:mt-[150px] mx-auto md:mx-0  text-center md:text-start'>
                <ul className='w-[350px] md:w-[781px] flex flex-wrap flex-col md:flex-row gap-[20px] md:gap-[35px] mx-auto md:mx-0'>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">All Articles</a></li>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">Sales</a></li>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">Marketing</a></li>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">Service</a></li>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">Product</a></li>
                    <li className='text-[18px] font-medium text-[#777777] hover:text-black pb-[15px] md:pb-[32px] hover:border-b-[3px] hover:border-primary-green'><a href="">News</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default HeroBlog