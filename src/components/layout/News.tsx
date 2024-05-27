import React from 'react'

const News = () => {
  return (
    <section className='w-full h-[1400px] md:h-[860px] overflow-hidden'>
      <div className='regular-container h-full'>
        <div className='flex flex-wrap flex-col md:flex-row'>
          <h1 className='text-[30px] md:text-[64px] leading-[74px] tracking-[-0.89px] font-bold mt-[60px] md:mt-[120px] m-auto md:m-0'>What’s new at Roooby?</h1>
            <div className='w-[100px] h-[24px] mt-[30px] md:mt-[160px] ml-[300px] md:ml-[327px]'>
              <div className='flex flex-wrap'>
               <p className='text-[18px] md:text-[20px] tracking-[0.43px] font-medium cursor-pointer'>See all</p>
               <img 
               src="Arrow-Green.svg" 
               alt="Arrow" 
               className='' />
              </div>
           </div>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row gap-[5px] md:gap-[30px]'>
          <div className='w-[350px] mx-[40px] md:mx-0 md:w-[553px] h-[580px]'>
            <p className='mt-[100px] md:mt-[72px] pb-[16px] text-[14px] uppercase font-bold tracking-[1.4px] border-b-[2px] border-border-grey text-border-grey'>service</p>
            <img 
            src="Image-Thumbnail-1.png" 
            alt="Thumnbail-1" 
            className='mt-[24px]' />
            <h2 className='text-[26px] md:text-[32px] leading-[35px] md:leading-[42px] tracking-[-0.44px] font-bold mt-[24px] cursor-pointer'>How To Deliver a Successful Product Launch</h2>
            <p className='text-[16px] font-medium mt-[24px]'>05 Sep 2024,<span className='text-border-grey'> by Joshua Nash</span></p>
          </div>

          <div className='w-[350px] mx-[40px] md:mx-0 md:w-[553px] h-[580px]'>
            <p className='mt-[72px] pb-[16px] text-[14px] uppercase font-bold tracking-[1.4px] border-b-[2px] border-border-grey text-border-grey'>service</p>
            <img 
            src="Image-Thumbnail-2.png" 
            alt="Thumnbail-2" 
            className='mt-[24px]' />
            <h2 className='text-[26px] md:text-[32px] leading-[35px] md:leading-[42px] tracking-[-0.44px] font-bold mt-[24px] cursor-pointer'>What Makes an Authentic Employee Profile, and Why Does It Matter?</h2>
            <p className='text-[16px] font-medium mt-[24px]'>07 Sep 2023,<span className='text-border-grey'> by Ivan Neshev</span></p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default News