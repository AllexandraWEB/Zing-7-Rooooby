import React from 'react'

const Info = () => {
  return (
    <section className='regular-container bg-white overflow-hidden'>
      <div className='h-[620px] mt-8 md:mt-[120px] border-t-[1px] border-border-grey flex flex-col md:flex-row'>
        <div className='px-a6 py-4 w-full text-center md:text-start'>
          <div>
            <p className='w-[65px] mx-auto md:mx-0 text-dark-gray uppercase text-[14px] font-bold px-[8px] py-[6px] tracking-[1.4px] bg-primary-yellow rounded-md mt-3 md:mt-[93px]'>sales</p>
          </div>
          <h1 className='w-[350px] md:w-[560px] text-[30px] md:text-[58px] mx-auto md:mx-0 text-black font-bold tracking-[-0.67px] leading-[70px] text-primary max-sm:leading-[50px] mt-[50px] md:mt-[16px] text-center md:text-start'>Increase company revenue up to 65%</h1>
          <p className='w-[350px] md:w-[487px] mt-5 md:mt-[24px] mx-auto md:mx-0 text-[16px] md:text-[18px] text-center md:text-start'>Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.</p>
          <ul className='w-[487px] mt-6 md:mt-[25px] text-start'>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px]'>Close more deals with single-page contact management</p>
            </li>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Enjoy one-click calling, call scripts and voicemail automation</p>
            </li>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Track stages and milestones of your deals to keep the sales process on track</p>
            </li>
          </ul>
        </div>
        <div className='flex justify-end'>
        <img 
        src="Image-Revenue.png" 
        alt="Stats"
        className='relative h-[400px] w-[400px] md:h-[575px] md:w-[1000px] mt-4 md:mt-[60px] m-auto' />
      </div>
      </div>

      <div className='h-[1350px] md:h-[604px] mt-3 md:mt-[120px] border-t-[1px] border-border-grey flex flex-col md:flex-row'>
      <div className='flex flex-wrap justify-end'>
        <img 
        src="Image-Marketing.png" 
        alt="Stats"
        className='relative h-[400px] w-[400px] md:h-[510px] md:w-[1000px] mt-[400px] md:mt-[60px] ml-4 m-auto' />
      </div>
        <div className='px-6 py-4 w-full text-start md:text-start pl-0 md:pl-[98px]'>
          <div className=''>
            <p className='w-[112px] text-dark-gray uppercase text-[14px] font-bold px-[8px] py-[6px] tracking-[1.4px] bg-primary-yellow rounded-md mt-3 md:mt-[93px] ml-[155px] md:ml-0'>marketing</p>
          </div>
          <h1 className='w-[350px] md:w-[560px] text-[30px] md:text-[58px] mx-auto md:mx-0 text-black font-bold tracking-[-0.67px] leading-[70px] text-primary max-sm:leading-[50px] mt-[50px] md:mt-[16px] text-center md:text-start'>Marketing</h1>
          <p className='w-[350px] md:w-[487px] mt-5 md:mt-[24px] mx-auto md:mx-0 text-[15px] md:text-[18px] text-center md:text-start'>Market like the most successful companies in the world with Agile CRM&apos;s marketing automation software. </p>
          <ul className='w-[487px] mt-6 md:mt-[25px]'>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px]'>Marketing workflows with an easy drag-and-drop designer</p>
            </li>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Use our templates to create high converting, mobile responsive landing pages</p>
            </li>
            <li className='flex w-[400px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Integrate social media easily into your marketing campaigns & contact views</p>
            </li>
          </ul>
        </div>
       
       <div className='flex gap-[10px] w-[400px] md:w-[410px] h-[80px] bg-primary-blue absolute left-[15px] md:left-[390px] top-[4585px] md:top-[3210px] rounded-lg'>
        <div className='my-auto pl-[15px]'>
        <p className='text-white'>Automate your sales & marketing</p>
        </div>
        <div className='my-auto'>
        <button 
             type="submit" 
             className="bg-primary-green text-white font-bold tracking-[-0.25px] w-[120px] h-[56px] rounded-lg text-[18px]"><a href="/pricing">Start Now</a>
        </button> 
        </div>
       </div>
      </div>

      <div className='h-[1070px] md:h-[720px] mt-8 md:mt-[120px] border-t-[1px] border-border-grey flex flex-col md:flex-row'>
        <div className='px-a6 py-4 w-full text-center md:text-start'>
          <div>
            <p className='w-[65px] mx-auto md:mx-0 text-dark-gray uppercase text-[14px] font-bold px-[8px] py-[6px] tracking-[1.4px] bg-primary-yellow rounded-md mt-3 md:mt-[93px]'>sales</p>
          </div>
          <h1 className='w-[350px] md:w-[560px] text-[30px] md:text-[58px] mx-auto md:mx-0 text-black font-bold tracking-[-0.67px] leading-[70px] text-primary max-sm:leading-[50px] mt-[50px] md:mt-[16px] text-center md:text-start'>Help Desk Software</h1>
          <p className='w-[350px] md:w-[487px] mt-5 md:mt-[24px] mx-auto md:mx-0 text-[16px] md:text-[18px] text-center md:text-start'>Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.</p>
          <ul className='w-[487px] mt-6 md:mt-[25px] text-start'>
            <li className='flex w-[400px] md:w-[440px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px]'>Resolve every issue in the shortest possible time with powerful ticketing features</p>
            </li>
            <li className='flex w-[400px] md:w-[440px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</p>
            </li>
            <li className='flex w-[400px] md:w-[440px]'>
              <img src="Shape.svg" alt="" className='mr-[20px] md:mr-[27px] ml-[20px] md:ml-0'/>
              <p className='text-black text-[16px] md:text-[18px] leading-[28px] tracking-[0.2px] mt-4 md:mt-[16px]'>Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</p>
            </li>
          </ul>
        </div>
        <div className='flex justify-end'>
        <img 
        src="Image-Help-Desk.png" 
        alt="Stats"
        className='relative h-[400px] w-[400px] md:h-[575px] md:w-[1000px] mt-4 md:mt-[60px] m-auto' />
      </div>
      </div>
    </section>
  )
}

export default Info