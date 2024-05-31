import React from 'react'
import BenefitCard from '../ui/BenefitCard'

const Benefits = () => {
  return (
    <section className='w-full h-[1750px] md:h-[879px] bg-primary-blue text-white'>
      <div className='regular-container h-full flex flex-wrap'>
        <div className='w-[613px] h-[116px] mt-[90px] md:mt-[120px]'>
          <h1 className='text-[30px] md:text-[48px] font-bold text-center md:text-start mx-1'>Here&#39;s how Roooby can benefit your business</h1>
        </div>
        <div className='w-[350px] md:w-[487px] h-[84px] mt-[5px] md:mt-[156px] mx-auto md:mx-0'>
          <p className='text-[16px] md:text-[18px] text-center md:text-start mx-1'>Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
        </div>
        <div className='m-auto md:m-0'>
          <BenefitCard />
        </div>
      </div>
    </section>
  )
}

export default Benefits