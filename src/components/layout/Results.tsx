import React from 'react'

const Results = () => {
  return (
    <section className='w-full h-[1150px] md:h-[1100px] overflow-hidden'>
       <div className='regular-container h-[762px] md:h-[1000px] md:pb-[20px]'>
         <div className='w-[350px] md:w-[782px] mx-auto md:mx-0'>
          <h1 className='md:mt-[180px] text-[30px] md:text-[48px] leading-[35px] md:leading-[68px] tracking-[0.67px] font-bold text-center md:text-start'>Real-life results and revenue</h1>
        </div>
        <div className='w-[350px] md:w-[602px] mx-auto md:mx-0'>
          <p className='mt-[20px] md:mt-[12px] mb-[20px] md:mb-[72px] text-[18px] leading-[28px] text-medium-gray text-center md:text-start'>See how companies like yours have smashed their sales success goals</p>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row'>

          <div className='w-full h-[255px] border-t-2 flex flex-col md:flex-row gap-[40px] md:gap-[140px]'>

          <div className='mt-[45px] md:mt-[45px] text-center md:text-start'>
            <span className='text-[72px] font-bold leading-[72px] tracking-[-1px]'>$2.5 M</span>
            <p className='mt-[15px] md:mt-[24px] text-[18px] md:text-[20px] font-bold'>Generate sales</p>
          </div>

          <div className='w-[350px] md:w-[749px] mx-auto md:mx-0 md:h-[126px]'>
            <p className='mt-[5px] md:mt-[45px] text-[18px] leading-[30px] md:leading-[42px] md:text-[30px] font-medium tracking-[-0.44px] text-center md:text-start'>Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
            <div className='mt-[42px] md:mt-[32px] flex flex-row gap-[20px] md:gap-[12px]'>
              <img 
              src="Picture-CEO.png" 
              alt="Avatar" 
              className='w-[50px] h-[50px] ml-[10px] md:ml-0'/>
              <p className='text-[16px] text-dark-gray'>
              <span className='font-bold'>Nellie Foster</span> <br /> Founder & CEO, Foster Business Strategies</p>
            </div>
            </div>

          </div>
        
        <div className='flex flex-wrap flex-col md:flex-row'>

          <div className='w-full mt-[250px] md:mt-[72px] h-[255px] border-t-2 flex flex-col md:flex-row gap-[40px] md:gap-[235px]'>

          <div className='mt-[35px] md:mt-[45px] text-center md:text-start'>
            <span className='text-[72px] font-bold leading-[72px] tracking-[-1px]'>45%</span>
            <p className='mt-[15px] md:mt-[24px] text-[18px] md:text-[20px] font-bold'>Grew revenue</p>
          </div>

          <div className='w-[350px] md:w-[749px] mx-auto md:mx-0 md:h-[126px]'>
            <p className='mt-[5px] md:mt-[45px] text-[18px] leading-[30px] md:leading-[42px] md:text-[30px] font-medium tracking-[-0.44px] text-center md:text-start'>Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
            <div className='mt-[42px] md:mt-[32px] flex flex-row gap-[20px] md:gap-[12px]'>
              <img 
              src="Picture-Director-1.png" 
              alt="Avatar" 
              className='w-[50px] h-[50px] ml-[10px] md:ml-0'/>
              <p className='text-[16px] text-dark-gray'>
              <span className='font-bold'>Lawrence Gibbs</span> <br /> Marketing Director</p>
            </div>
            </div>

          </div>
        </div>

        </div>
       </div>
    </section>
  )
}

export default Results