import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[1540px] md:h-[480px]'>
      <div className='regular-container h-[762px] md:h-[250px] md:mt-[120px] flex flex-wrap md:flex-nowrap'>
        <div className='w-[350px] mx-auto md:mx-0 md:w-[263px]'>
          <img src="Roooby.svg" alt="Roooby-Logo" className='mx-auto md:mx-0 mt-[70px] md:mt-0' />
          <div className='md:w-[263px]'>
            <p className='text-[14px] leading-[24px] mt-[10px] md:mt-[26px]'>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</p>
          </div>
          <div className='flex flex-wrap gap-[16px] mt-[24px] justify-center md:justify-start'>
            <img src="Twitter.svg" alt="Twitter" />
            <img src="Facebook.svg" alt="Facebook" />
            <img src="Linkedin.svg" alt="Linkedin" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:w-full md:h-[202px] md:ml-[127px] md:gap-[50px] mx-auto md:mx-0 text-center md:text-start'>
          <div className='md:w-[73px] md:h-[202px] mt-[40px] md:mt-0'>
            <h4 className='text-[16px] font-bold mb-[10px]'>Company</h4>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>About</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Pricing</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Jobs</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Blog</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Careers</p>
          </div>
          <div className='md:w-[127px] md:h-[236px] md:ml-[90px] mt-[40px] md:mt-0'>
            <h4 className='text-[16px] font-bold mb-[10px]'>Product</h4>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Sales software</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Features</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Privacy</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Marketplace</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Status</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>API</p>
          </div>
          <div className='md:w-[137px] md:h-[236px] md:ml-[40px] mt-[40px] md:mt-0'>
            <h4 className='text-[16px] font-bold mb-[10px]'>Discover</h4>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Partner Program</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Get our newsletter</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Sales Pipeline </p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>What is CRM?</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>CRM Comparison</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Resources</p>
          </div>
          <div className='md:w-[105px] md:h-[168px] md:ml-[23px] md:text-start mt-[40px] md:mt-0'>
            <h4 className='text-[16px] font-bold mb-[10px]'>Help Center</h4>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Community</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Knowledge Base</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Academy</p>
            <p className='text-[14px] leading-[34px] tracking-[0.2px] md:mt-[2px]'>Support</p>
          </div>
        </div>
      </div>
      <div className='w-[350px] mx-auto md:w-[1140px] flex flex-wrap border-t-2 mt-[500px] md:mt-[100px] flex-col md:flex-row'>
           <p className='mt-[30px] md:mt-[45px] mx-auto md:mx-0'>© Copyright 2024</p>
           <div className='flex flex-wrap flex-col md:flex-row mt-[40px] md:mt-[45px] md:ml-[300px] mx-auto md:mx-0 gap-[20px] md:gap-[40px] text-center md:text-start'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
           </div>
      </div>
    </footer>
  )
}

export default Footer