import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-[1350px] md:h-[954px] bg-light-gray text-black overflow-hidden'>
     <div className='regular-container'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:pb-[100px]'>
        
          <div className='w-[350px] md:w-[555px] mt-[72px] mx-auto md:mx-0'>
             <h1 className='text-[40px] md:text-[64px] leading-[35px] md:leading-[74px] tracking-[-0.89px] font-bold text-center md:text-start'>Get in touch with our lovely team</h1>
          </div>
          <div className='flex flex-col w-[350px] md:w-[458px] mt-[72px] mx-auto md:mx-0'>
            <div>
                <h4 className='text-[18px] font-bold'>Roooby Technologies</h4>
                <p>Plovdiv, Bulgaria, bul Vasil Levski 96</p>
            </div>

            <div className="relative w-full h-96">
             <iframe src=
             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387132.4772381346!2d-74.25819214602015!3d40.70582517274754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1644558351325!5m2!1sen!2suk"
             width="458" height="288"
             loading="lazy"
             className="mt-[32px] w-[350px] md:w-[458px]">
             </iframe>
            </div>

            <div className='flex gap-[50px] md:gap-[102px]'>
             <div className='border-l-[1.5px] border-border-grey pl-[16px]'>
                <h4 className='font-bold text-[18px]'>General</h4>
                <p className='text-[18px] text-[#404040]'>hello@me.com</p>
             </div>
             <div className='border-l-[1.5px] border-border-grey pl-[16px]'>
                <h4 className='font-bold text-[18px]'>Support</h4>
                <p className='text-[18px] text-[#404040]'>support@me.com</p>
             </div>
            </div>
           </div>
         </div>

          <div className='w-[350px] md:w-[555px] mt-[110px] md:mt-0 mx-auto md:mx-0'>
               <div className="relative">
                        <input 
                        type="name" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name"
                        className="w-[350px] md:w-[555px] h-[72px] md:mt-[316px] pl-5 pr-3 py-5 rounded-[15px] text-[18px] md:text-[21px] font-medium tracking-[0.29px] text-border-grey" />
                </div>
                <div className="relative">
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email"
                        className="w-[350px] md:w-[555px] h-[72px] mt-[24px] pl-5 pr-3 py-5 rounded-[15px] text-[18px] md:text-[21px] font-medium tracking-[0.29px] text-border-grey" />
                </div>
                <div className="relative">
                        <input 
                        type="message" 
                        id="message" 
                        name="message" 
                        placeholder="Message"
                        className="w-[350px] md:w-[555px] h-[190px] mt-[24px] text-start pl-5 pr-3 pb-[125px] rounded-[15px] text-[18px] md:text-[21px] font-medium tracking-[0.29px] text-border-grey" />
                </div>
                <div className='mt-[24px]'>
                <button 
                        type="submit" 
                        className="bg-primary-green text-white font-bold tracking-[-0.19px] w-[206px] h-[56px] rounded-lg text-[18px] text-start pl-[24px] pt-[14px] flex flex-row gap-[25px]">Send message
                         <img 
                         src="White-Arrow.svg" 
                         alt="Arrow" 
                         className='pt-[8px]' />
                </button> 
                </div>
         </div>
       </div>
      </div>
    </section>
  )
}

export default Contact