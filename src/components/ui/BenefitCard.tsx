import React from 'react'

const BenefitCard = () => {
  return (
    <div className='flex flex-col flex-wrap md:flex-row justify-between gap-[9px]'>
    <div className='w-[350px] mx-auto md:mx-0 md:w-[374px] h-[439px] bg-card-blue rounded-lg hover:bg-primary-yellow hover:text-black hover:-translate-y-4 duration-500 mt-[40px] md:mt-[30px]'>
        <div>
            <img src="Icon-Human-White.svg" alt="" className='ml-8 md:ml-[36px] pt-[64px] pb-[46px]' />
        </div>
        <div className='w-[310px] border-t-[1px] hover:border-black m-auto mt-4'>
        <div className='w-[168px]'>
          <h1 className='text-[20px] font-bold mt-5 md:mt-[16px] mb-1 md:mb-[14px]'>Lead customers to happiness</h1>
        </div>
        <div className='w-[260px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
          </div>
        </div>
      </div>

      <div className='w-[350px] mx-auto md:mx-0 h-[439px] bg-card-blue rounded-lg hover:bg-primary-yellow hover:text-black hover:-translate-y-4 duration-500 mt-[20px] md:mt-[30px]'>
        <div>
            <img src="Icon-Laptop.svg" alt="" className='ml-8 md:ml-[36px] pt-[64px] pb-[61px]' />
        </div>
        <div className='w-[310px] border-t-[1px] hover:border-black m-auto mt-4'>
        <div className='w-[168px]'>
          <h1 className='text-[20px] font-bold mt-5 md:mt-[16px] mb-1 md:mb-[14px]'>Support your support</h1>
        </div>
        <div className='w-[260px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
          </div>
        </div>
      </div>

      <div className='w-[350px] mx-auto md:mx-0 bg-card-blue rounded-lg hover:bg-primary-yellow hover:text-black hover:-translate-y-4 duration-500 mt-[20px] md:mt-[30px] mb-[70px]'>
        <div>
            <img src="Icon-Stick.svg" alt="" className='ml-8 md:ml-[36px] pt-[64px] pb-[46px]' />
        </div>
        <div className='w-[310px] border-t-[1px] hover:border-black m-auto mt-4'>
        <div className='w-[168px]'>
          <h1 className='text-[20px] font-bold mt-5 md:mt-[16px] mb-1 md:mb-[14px]'>Grow without growing pains</h1>
        </div>
        <div className='w-[260px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitCard