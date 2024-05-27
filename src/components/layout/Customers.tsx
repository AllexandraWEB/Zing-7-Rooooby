import React from 'react'
import CustomerCard from '../ui/CustomerCard'

const Customers = () => {
  return (
    <section className='w-full h-[1500px] md:h-[830px] bg-light-gray overflow-hidden'>
      <div className='regular-container h-[1500px] md:h-full md:pb-[20px]'>
        <div className='flex flex-wrap flex-col md:flex-row'>
           <div className='w-[350px] md:w-[570px] mx-auto md:mx-0'>
             <h1 className='text-[30px] md:text-[48px] leading-[35px] md:leading-[58px] tracking-[-0.67px] font-bold mt-[60px] md:mt-[120px] m-auto md:m-0 text-center md:text-start'>We love our Customers and They love us too</h1>
            </div>
          <div className='w-[100px] h-[24px] mt-[30px] md:mt-[210px] ml-[300px] md:ml-[466px]'>
            <div className='flex flex-wrap'>
               <p className='text-[18px] md:text-[20px] tracking-[0.43px] font-medium cursor-pointer'>See all</p>
               <img 
               src="Arrow-Green.svg" 
               alt="Arrow" 
               className='' />
              </div>
           </div>
         </div>
        <div>
          <CustomerCard />
        </div>
      </div>
    </section>
  )
}

export default Customers