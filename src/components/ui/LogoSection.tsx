import React from 'react'

const LogoSection = () => {
  return (
    <div className='max-w-[1240px] h-[50px] m-auto flex justify-start items-center flex-col md:flex-row gap-5 mt-5 md:mt-[130px]'>
     <p className='text-base m-auto md:text-[16px] font-medium mr-[107px] my-5'>Trusted by 1,000+ customers</p>
    
     <img src="../Google.svg" alt="Google" className='mx-4 px-2 my-5'/>
     <img src="../Atlassian.svg" alt="Google" className='mx-4 px-2 my-5'/>
     <img src="../Canon.svg" alt="Google" className='mx-4 px-2 my-5'/>
     <img src="../Walmart.svg" alt="Google" className='mx-4 px-2 my-5'/>
     <img src="../Amazon.svg" alt="Google" className='mx-4 px-2 my-5'/>
    </div>
  )
}

export default LogoSection