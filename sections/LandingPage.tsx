import React from 'react'
import { whoWeAre } from '..'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-center pt-[104px] gap-104px bg-[#F6DFBF] relative z-50 overflow-hidden'>
            <div className='relative z-50 mt-24 mb-20'>
                <Image alt='Logo' src="/madasa_logo.svg" width={650} height={300}></Image>
                <p className='text-white font-bold text-9xl'>Collective</p>
            </div>
            <div className='absolute z-40 bg-[#D15640] w-[1600px] h-[1449px] rounded-[100%/100%] -translate-y-20'></div>
            <div className='text-white w-[1140px] text-center mb-24 relative z-50'>
                <h1 className='text-2xl'>{whoWeAre}</h1>
            </div>
            {/* <div className='flex justify-between gap-6'>
                <button className='py-4 px-8 border-black border rounded-full'>How We Work</button>
                <button className='py-4 px-8 bg-black text-white border-black border rounded-full'>Contact Us</button>
            </div> */}
            <div className='flex flex-row gap-28 px-[70px] mb-56 relative z-50'>
                <div className='flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white'>
                    <div className=' flex justify-center items-center'>
                        <Image alt='product design' src="/product-design.png" width={256} height={256}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Product Design</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
                <div className='flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white'>
                    <div className=' flex justify-center items-center'>
                        <Image alt='development design' src="/development-design.png" width={256} height={256}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Development</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
                <div className='flex flex-col  gap-6 items-center shadow-br2xl py-8 px-16 rounded-3xl bg-white'>
                    <div className=' flex justify-center items-center'>
                        <Image alt='branding design' src="/branding-design.png" width={256} height={256}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Branding</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
            </div>
            <div className='flex px-[70px] py-20 gap-16 bg-[#98B4A8]'>
                <Image alt='gen fulton image' src="/gen-fulton.png" width={654} height={409}></Image>
                <div className='flex flex-col py-10 px-12 gap-8 bg-white rounded-3xl shadow-b2xl'>
                    <h1 className='font-bold text-[40px]'>Gen Fulton Consultancy</h1>
                    <p className='text-[32px]'>Responsive Website</p>
                    <p className='text-[20px]'>Gen Fulton is a psychotherapist & mental performance coach who was looking for help designing her website & a brand that encompassed her multiple businesses.</p>
                    <button className='bg-[#6255F3] text-white rounded-full w-[164px] h-[54px]'>View Website</button>
                </div>
            </div>
            <div className='flex flex-col py-14 px-70 gap-8 bg-white w-[1140px] rounded-3xl shadow-b2xl'>
                <h1 className='text-[32px] font-bold'>Client Testimonials</h1>
                <p className='text-[20px] '>“I want to give a big shoutout to my amazing website development team for designing my business cards, ensuring delivery of them before an important networking event, and for creating my website from scratch in a tight window (GenFulton.com). You guys completely blew me away with your design ideas, communication, professionalism, research, openness to feedback and delivery. Thank you for being an awesome team!!”</p>
                <h1 className='text-2xl font-bold'>Gen Fulton, Owner of Gen Fulton Consultancy</h1>
            </div>
            <div className='flex  justify-between px-70 mb-20 w-full items-center'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[40px]'>Let's make something amazing together</h1>
                    <p className='text-2xl'>Request a free discovery call.</p>
                    <button className='bg-[#6255F3] text-white rounded-full w-[164px] h-[54px]'>View Website</button>
                </div>
                <Image alt='schedule call' src="/schedule-call.png" width={395} height={100}/>
            </div>
        </div>
    )
}

export default LandingPage