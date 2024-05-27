import React from 'react'
import BusinessCard from '../ui/BusinessCard'

const BusinessPlan = () => {
  return (
    <section className='w-full h-[3300px] md:h-[1479px] bg-light-gray text-black'>
      <div className='regular-container flex flex-wrap md:pb-[100px]'>
        <div className=' w-[350px] md:w-[681px] h-[60px] md:h-[148px] mt-[50px] md:mt-[72px] mx-auto md:mx-0'>
          <h1 className='text-[30px] md:text-[64px] leading-[35px] md:leading-[74px] tracking-[-0.89px] font-bold text-center md:text-start'>Choose the right plan <span className='text-border-grey'>for your business</span></h1>
        </div>
        <div className='w-[364px] h-[84px] mt-[50px] md:mt-[135px] mx-auto md:mx-0 md:ml-[91px]'>
          <p className='text-[16px] md:text-[18px] leading-[28px] text-center md:text-start mx-1'>Built with love for growing businesses. Check out the Roooby CRM pricing grid below. Switch between plans at any time.</p>
        </div>
        <div className='m-auto md:m-0 pb-[40px] md:pb-0'>
          <BusinessCard />
        </div>
        <div className='w-full md:h-[105px] mt-[100px] flex flex-col md:flex-row border-t-[2px] border-border-grey'>
            <div className='w-full h-[42px] text-[32px] font-bold leading-[42px] tracking-[-0.44px]'>
            <h1 className='mt-[55px] md:ml-[100px] w-[350px] md:w-[530px] mx-auto text-center'>Need help choosing the right plan?</h1>
            </div>
            <div className='mt-[140px] md:mt-[50px] flex gap-[30px] mx-auto md:mx-0'>
            <button 
            type="submit" 
            className="bg-white text-black font-bold border-stroke border-[1.5px] tracking-[-0.19px] w-[170px] h-[56px] rounded-lg text-[18px]">Contact sales
            </button> 
            <button 
            type="submit" 
            className="bg-primary-blue text-white font-bold tracking-[-0.19px] w-[170px] h-[56px] rounded-lg text-[18px] md:mr-[70px]">Compare Plans
            </button> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessPlan