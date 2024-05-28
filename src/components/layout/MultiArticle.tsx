import React from 'react'

const MultiArticle = () => {
  return (
    <section className='w-full h-[2815px] md:h-[990px] overflow-hidden'>
        <div className='regular-container flex flex-wrap flex-col md:flex-row gap-[50px] md:gap-[26px] text-center md:text-start'>
            <div className='w-[350px] md:w-[361px] h-[427px] '>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>new</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-1.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>Learn from My Mistakes: 7 Digital Course Pitfalls to Skip</h1>
                <p className='mt-[20px]'>05 Sep 2024, <span className='text-border-grey'> by  Maxwell Iskiev</span></p>
            </div>

            <div className='w-[350px] md:w-[361px] h-[427px]'>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>sales</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-2.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>How To Do Representation in Marketing the Right Way</h1>
                <p className='mt-[20px]'>20 Mar 2022, <span className='text-border-grey'> by Bill Holloway</span></p>
            </div>

            <div className='w-[350px] md:w-[361px] h-[427px]'>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>sales</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-3.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>The Psychology of Short-Form Content: Why We Love...</h1>
                <p className='mt-[20px]'>07 Jun 2024, <span className='text-border-grey'> by Stephen Henderson</span></p>
            </div>

            <div className='w-[350px] md:w-[361px] h-[427px] md:mt-[100px]'>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>sales</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-4.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>The Challenger Sale model: How to lead the conversation</h1>
                <p className='mt-[20px]'>09 Jan 2024, <span className='text-border-grey'> by Joshua Nash</span></p>
            </div>

            <div className='w-[350px] md:w-[361px] h-[427px] md:mt-[100px]'>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>product</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-5.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>3 ways To automate your lead generation process</h1>
                <p className='mt-[20px]'>08 Jul 2024, <span className='text-border-grey'> by Leroy Figueroa</span></p>
            </div>

            <div className='w-[350px] md:w-[361px] h-[427px] md:mt-[100px]'>
                <p className='border-b-[1.5px] border-border-grey pb-[14px] text-[14px] tracking-[1.4px] font-bold uppercase text-border-grey'><span>product</span></p>
                <div className='pt-[24px]'>
                    <img 
                    src="Article-Img-6.svg" 
                    alt="Image-1" />
                </div>
                <h1 className='text-[24px] leading-[34px] tracking-[-0.33px] font-bold text-center md:text-start mt-[16px] cursor-pointer'>Marketplace Monthly Apps Spotlight: Aug 2023</h1>
                <p className='mt-[20px]'>05 Aug 2024, <span className='text-border-grey'> by Joshua Nash</span></p>
            </div>
        </div>
    </section>
  )
}

export default MultiArticle