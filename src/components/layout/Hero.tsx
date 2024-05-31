import React from 'react'
import LogoSection from '../ui/LogoSection'

const Hero = () => {
  return (
  <section className='overflow-hidden bg-light-gray'>
    <div className='mx-auto w-full flex flex-col md:flex-row'>
      <div className='w-full md:hero-content text-center md:text-start'>

        <h1 className='max-w-[642px] md:pl-[33px] text-[35px] md:text-[64px] mx-[20px] md:mx-0 text-primary-blue font-bold tracking-[-0.89px] leading-[74px] text-primary max-sm:leading-[50px] mt-[40px] md:mt-[75px]'>Bringing companies and customers together, anywhere</h1>
        <p className='max-w-[478px] md:pl-[30px] mt-5 md:mt-6 mx-5 md:mx-0 text-[16px] md:text-[18px]'>An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>

        <form className="flex">
                    <div className="flex-1 md:pl-[30px]">
                      <label htmlFor="phone" className="sr-only">Enter your email</label>
                        <div className="relative">
                            <input 
                            type="tel" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email"
                            className="w-[350px] md:w-[457px] h-[72px] mt-[64px] pl-5 pr-3 py-5 rounded-[15px] border-2" />

                            <button 
                            type="submit" 
                            className="bg-primary-blue text-white text-bold w-[158px] h-[54px] py-2 px-7 rounded-lg absolute right-[46px] md:right-[162px] bottom-[37px] md:bottom-[37px] font-bold text-[18px]">Try for Free</button> 

                            <p className="ml-4 mt-2 text-sm text-[#404040] lg:text-left">
                             Full access. No credit card required.
                            </p> 
                        </div>
                     </div>
                </form>
      </div>
      <div className='flex justify-end'>
        <img 
        src="Image-Hero.png" 
        alt="Stats"
        className='relative mt-5 md:mt-[75px] ml-7 md:ml-0 border-y-[15px] border-l-[15px] border-black rounded-l-[30px] h-[330px] w-[400px] md:h-[500px] md:w-[600px]' />
      </div>
    </div>
    <div className='max-w md:regular-container h-[540px] md:h-[150px] m-auto'>
        <LogoSection />
    </div>
  </section>
  )
}

export default Hero