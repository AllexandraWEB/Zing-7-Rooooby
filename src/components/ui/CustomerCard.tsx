import React from 'react'

const CustomerCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[9px]'>
      <div className='w-[350px] md:w-[360px] h-[371px] mt-[40px] md:mt-[30px] mx-auto md:mx-0'>
        <div>
            <img 
            src="Quotation-Mark.svg" 
            alt="Quotation-Mark" 
            className='ml-8 md:ml-0 pt-[64px] pb-[46px]' />
        </div>
        <div className='md:w-[360px] border-t-[1px] border-border-grey mx-auto md:mx-0'>
         <div className='md:w-[360px]'>
          <p className='text-[18px] md:text-[24px] font-[600] leading-[34px] tracking-[-0.33px] mt-4 md:mt-[24px]'>The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.</p>
         </div>
         <div className='mt-[42px] md:mt-[50px] flex flex-row gap-[20px] md:gap-[12px]'>
              <img 
              src="Picture-Director-2.png" 
              alt="Avatar" 
              className='w-[50px] h-[50px] ml-[10px] md:ml-0'/>
              <p className='text-[16px] text-dark-gray'>
              <span className='font-bold'>Lola Ross</span> <br /> Marketing Director</p>
            </div>
        </div>
      </div>

      <div className='w-[350px] md:w-[360px] h-[371px] mt-[40px] md:mt-[30px] mx-auto md:mx-0'>
        <div>
            <img 
            src="Quotation-Mark.svg" 
            alt="Quotation-Mark" 
            className='ml-8 md:ml-0 pt-[64px] pb-[46px]' />
        </div>
        <div className='md:w-[360px] border-t-[1px] border-border-grey mx-auto md:mx-0'>
         <div className='md:w-[360px]'>
          <p className='text-[18px] md:text-[24px] font-[600] leading-[34px] tracking-[-0.33px] mt-4 md:mt-[24px]'>It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.</p>
         </div>
         <div className='mt-[42px] md:mt-[50px] flex flex-row gap-[20px] md:gap-[12px]'>
              <img 
              src="Picture-Speaker.png" 
              alt="Avatar" 
              className='w-[50px] h-[50px] ml-[10px] md:ml-0'/>
              <p className='text-[16px] text-dark-gray'>
              <span className='font-bold'>Daisy Phelps</span> <br /> Speaker and Author, Lifeiseasy</p>
            </div>
        </div>
      </div>

      <div className='w-[350px] md:w-[360px] h-[371px] mt-[40px] md:mt-[30px] mx-auto md:mx-0'>
        <div>
            <img 
            src="Quotation-Mark.svg" 
            alt="Quotation-Mark" 
            className='ml-8 md:ml-0 pt-[64px] pb-[46px]' />
        </div>
        <div className='md:w-[360px] border-t-[1px] border-border-grey mx-auto md:mx-0'>
         <div className='md:w-[360px]'>
          <p className='text-[18px] md:text-[24px] font-[600] leading-[34px] tracking-[-0.33px] mt-4 md:mt-[24px]'>Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!</p>
         </div>
         <div className='mt-[42px] md:mt-[85px] flex flex-row gap-[20px] md:gap-[12px]'>
              <img 
              src="Picture-Director-3.png" 
              alt="Avatar" 
              className='w-[50px] h-[50px] ml-[10px] md:ml-0'/>
              <p className='text-[16px] text-dark-gray'>
              <span className='font-bold'>Andrew Wilkins</span> <br /> Managing Director, Nirma Studio</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard