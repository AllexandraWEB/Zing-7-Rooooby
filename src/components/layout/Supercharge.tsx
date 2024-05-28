import React from 'react'

const Supercharge = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="regular-container flex flex-wrap flex-col md:flex-row pt-[120px] pb-[117px]">
        <div className='sm:w-[350px] md:w-[773px]'>
          <h2 className="w-[350px] md:w-[773px] text-[30px] md:text-[64px] mx-[40px] md:mx-0 text-center md:text-start font-bold md:leading-[73px] tracking-[-0.89px] text-white">Ready to supercharge your business?</h2>
          <div className='w-full text-center md:text-start md:w-[570px] md:mt-[24px]'>
          <p className="mt-[25px] text-[18px] font-medium text-[#B8CACE]">
            Ask about <span className="font-black">Roooby</span> products, pricing, implementation, or anything else.
            Our highly trained reps are standing by, ready to help.
          </p>
          </div>
        </div>

      <div className="flex flex-col items-center gap-5 md:ml-[120px] md:mt-[50px]">
        <button 
        type="submit" 
        className="bg-white text-black font-bold tracking-[-0.25px] text-[18px] w-[198px] h-[64px] mt-[35px] md:mt-0 rounded-lg drop-shadow-xl"><a href="/pricing">Try for Free</a> 
        </button> 
          <p className="text-white text-sm font-medium">Full access. No credit card required.</p>
        </div>
      </div>

      <img
        src="Section-Background.svg"
        alt="background image"
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
      />
    </section>

  )
}

export default Supercharge