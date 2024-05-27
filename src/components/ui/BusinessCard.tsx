import React from 'react'

const BusinessCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[9px]'>
    <div className='w-[374px] h-[814px] bg-white rounded-[15px] mt-[40px] md:mt-[100px] shadow-sm'>
        
        <div className='w-[310px] m-auto'>
        <div className='w-[168px]'>
          <h1 className='text-[24px] font-bold mt-5 md:mt-[32px] mb-1 md:mb-[9px]'>Starter</h1>
        </div>

        <div className='w-[310px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Get organized and set up simple sales processes lorem ipsum</p>
          </div>

        <div className='mt-[10px] md:mt-[24px]'>
          <p className='text-[16px] font-bold text-[#777777] leading-[26px]'>
        <span className='text-[48px] text-black font-bold leading-[58px] tracking-[-0.67px]'>$8,90</span>/month</p>
        </div>

        <div className='mt-[14px] md:mt-[24px]'>
        <button 
        type="submit" 
        className="w-[120px] md:w-full bg-white text-black border-stroke border-[1px] font-bold tracking-[-0.25px] h-[56px] rounded-lg text-[18px]">Try for Free
        </button> 
        <p className='w-[310px] text-[#777777] text-[14px] tracking-[0.16px] mt-[15px] md:mt-[9px] mb-[35px] text-center'>Free 14-day trial. No credit card required.</p>
        </div>

        <ul className='w-[310px] mt-6 md:mt-[25px] text-start border-t-[1.5px] border-stroke'>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[28px]'>2 team members</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>1,000 Contacts & Companies</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>5 Campaign Workflows</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>10 Nodes Per Campaign</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>5 Automation Rules (Triggers)</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>3 Plugins/Integrations</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Marketing Automation</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Custom Deal Tracks</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Automated Voicemails</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Post-call Automation</p>
            </li>
          </ul>

        </div>
      </div>

      <div className='w-[374px] h-[814px] bg-white rounded-[15px] mt-[40px] md:mt-[100px] shadow-sm'>
        
        <div className='w-[310px] m-auto'>
        <div className='w-[168px] flex gap-[11px]'>
          <h1 className='text-[24px] font-bold mt-5 md:mt-[32px] mb-1 md:mb-[9px]'>Professional</h1>
          <div className='w-[126px] h-[14px]'>
          <p className='py-[5px] px-[9px] mt-5 md:mt-[34px] mb-1 md:mb-[9px] text-[12px] font-bold text-primary-green bg-light-green rounded-lg uppercase tracking-[1.2px]'>Recommended</p>
          </div>
        </div>

        <div className='w-[310px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Everything you need to boost performance and revenue lorem ipsum</p>
          </div>

        <div className='mt-[10px] md:mt-[24px]'>
          <p className='text-[16px] font-bold text-[#777777] leading-[26px]'>
        <span className='text-[48px] text-black font-bold leading-[58px] tracking-[-0.67px]'>$29,90</span>/month</p>
        </div>

        <div className='mt-[14px] md:mt-[24px]'>
        <button 
        type="submit" 
        className="w-[120px] md:w-full bg-primary-blue text-white font-bold tracking-[-0.25px] h-[56px] rounded-lg text-[18px]">Try for Free
        </button> 
        <p className='w-[310px] text-[#777777] text-[14px] tracking-[0.16px] mt-[15px] md:mt-[9px] mb-[35px] text-center'>Free 14-day trial. No credit card required.</p>
        </div>

        <ul className='w-[310px] mt-6 md:mt-[25px] text-start border-t-[1.5px] border-stroke'>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[28px]'>10 team members</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>2,500 Contacts & Companies</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>5 Campaign Workflows</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>10 Nodes Per Campaign</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>5 Automation Rules (Triggers)</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>3 Plugins/Integrations</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Marketing Automation</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Custom Deal Tracks</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Automated Voicemails</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px] opacity-35'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px] opacity-35 line-through'>Post-call Automation</p>
            </li>
          </ul>

        </div>
      </div>

      <div className='w-[374px] h-[814px] bg-white rounded-[15px] mt-[40px] md:mt-[100px] shadow-sm'>
        
        <div className='w-[310px] m-auto'>
        <div className='w-[168px]'>
          <h1 className='text-[24px] font-bold mt-5 md:mt-[32px] mb-1 md:mb-[9px]'>Enterprise</h1>
        </div>

        <div className='w-[310px]'>
          <p className='text-[16px] leading-[26px] mt-4 md:mt-0'>Customize without limits and access unrivaled support lorem ipsum</p>
          </div>

        <div className='mt-[10px] md:mt-[24px]'>
          <p className='text-[16px] font-bold text-[#777777] leading-[26px]'>
        <span className='text-[48px] text-black font-bold leading-[58px] tracking-[-0.67px]'>$39,90</span>/month</p>
        </div>

        <div className='mt-[14px] md:mt-[24px]'>
        <button 
        type="submit" 
        className="w-[120px] md:w-full bg-white text-black border-stroke border-[1px] font-bold tracking-[-0.25px] h-[56px] rounded-lg text-[18px]">Try for Free
        </button> 
        <p className='w-[310px] text-[#777777] text-[14px] tracking-[0.16px] mt-[15px] md:mt-[9px] mb-[35px] text-center'>Free 14-day trial. No credit card required.</p>
        </div>

        <ul className='w-[310px] mt-6 md:mt-[25px] text-start border-t-[1.5px] border-stroke'>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[28px]'>Unlimited team members</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>5,000 Contacts & Companies</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>25 Campaign Workflows</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>20 Nodes Per Campaign</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>15 Automation Rules (Triggers)</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>10 Plugins/Integrations</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Marketing Automation</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Custom Deal Tracks</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Automated Voicemails</p>
            </li>
            <li className='flex w-[310px] '>
              <img src="Shape.svg" alt="" className='mr-[12px] mt-[24px]'/>
              <p className='text-black text-[14px] md:text-[16px] leading-[26px] tracking-[0.18px] mt-[14px]'>Post-call Automation</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default BusinessCard