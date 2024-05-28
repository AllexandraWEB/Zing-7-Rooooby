import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-[3300px] md:h-[954px] bg-light-gray text-black'>
      <div className='regular-container flex flex-col md:pb-[100px]'>
        <div className='w-[350px] md:w-[555px] mt-[72px] mx-auto md:mx-0'>
            <h1 className='text-[40px] md:text-[64px] leading-[35px] md:leading-[74px] tracking-[-0.89px] font-bold text-center md:text-start'>Get in touch with our lovely team</h1>
        </div>
        <div className='flex flex-col w-[350px] md:w-[458px] mt-[72px]'>
            <div>
                <h4 className='text-[18px] font-bold'>Roooby Technologies</h4>
                <p>Plovdiv, Bulgaria, bul Vasil Levski 96</p>
            </div>

            <div className="relative w-full h-96">
             <iframe src=
             "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387132.4772381346!2d-74.25819214602015!3d40.70582517274754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1644558351325!5m2!1sen!2suk"
             width="458" height="288"
             loading="lazy"
             className="mt-[32px]">
             </iframe>
            </div>


            <div></div>
        </div>
      </div>
    </section>
  )
}

export default Contact