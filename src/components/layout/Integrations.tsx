import React from 'react'

const Integrations = () => {
  return (
    <section className='w-full h-[1700px] md:h-[770px] bg-light-gray overflow-hidden'>
      <div className='regular-container h-full'>
        <div className='w-[350px] md:w-[537px] mt-[50px] md:mt-[120px] text-center m-auto'>
          <h1 className='text-[30px] md:text-[48px] font-bold leading-[68px] tracking-[-0.67px]'>Over 300+ integrations</h1>
        </div>
        <div className='w-[350px] md:w-[631px] mt-[12px] text-center m-auto'>
          <p className='text-[18px] leading-[28px]'>Expand the capabilities of <span className='font-bold'>Roooby</span> with hundreds of apps and integrations</p>
        </div>
        <div className='w-[350px] md:w-full flex flex-wrap flex-col md:flex-row mt-[72px] gap-[10px] m-auto'>
          <img src="Logo (10).svg" alt="Logo" className='p-[28px] bg-white rounded-lg' />
          <img src="Logo.svg" alt="HubSpot" className='px-[61px] py-[36px] bg-white rounded-lg' />
          <img src="Logo (1).svg" alt="Zoom" className='px-[73px] py-[36px] bg-white rounded-lg' />
          <img src="Logo (2).svg" alt="Meet" className='p-[24px] bg-white rounded-lg' />
          <img src="Logo (3).svg" alt="Zendesk" className='px-[47px] py-[36px] bg-white rounded-lg' />
          <img src="Logo (4).svg" alt="Intercom" className='px-[77px] py-[32px] bg-white rounded-lg' />
          <img src="Logo (5).svg" alt="Logo" className='p-[28px] bg-white rounded-lg' />
          <img src="Logo (6).svg" alt="Slack" className='p-[28px] bg-white rounded-lg' />
          <img src="Logo (7).svg" alt="Asana" className='px-[75px] py-[36px] bg-white rounded-lg' />
          <img src="Logo (8).svg" alt="Teams" className='p-[28px] bg-white rounded-lg' />
        </div>
        <div className='w-[350px] md:w-[378px] flex gap-[10px] mt-[72px] m-auto'>
          <p className='text-[18px] md:text-[24px] font-medium tracking-[0.51px] text-center'>See all apps and extensions</p>
          <img src="Arrow.svg" alt="Arrow" />
        </div>
      </div>
    </section>
  )
}

export default Integrations