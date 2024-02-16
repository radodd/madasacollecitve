import React from 'react'
import { whoWeAre } from '..'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className='flex flex-col  items-center mt-[104px] gap-104px'>
            <Image alt='Logo' src="/Madasa_Collective_Logo.svg" width={550} height={300}></Image>
            <div className='w-[1140px] text-center'>
                <h1>{whoWeAre}</h1>
            </div>
            <div className='flex justify-between gap-6'>
                <button className='py-4 px-8 border-black border rounded-full'>How We Work</button>
                <button className='py-4 px-8 bg-black text-white border-black border rounded-full'>Contact Us</button>
            </div>
            <div className='flex flex-row gap-28'>
                <div className='flex flex-col w-[256px] gap-6 items-center'>
                    <div className='h-[256px] w-[256px] shadow-br2xl  rounded-3xl flex justify-center items-center'>
                        <Image alt='smile' src="/sentiment_satisfied.svg" width={100} height={100}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Product Design</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
                <div className='flex flex-col w-[256px] gap-6 items-center'>
                    <div className='h-[256px] w-[256px] shadow-br2xl  rounded-3xl flex justify-center items-center'>
                        <Image alt='smile' src="/sentiment_satisfied.svg" width={100} height={100}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Development</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
                <div className='flex flex-col w-[256px] gap-6 items-center'>
                    <div className='h-[256px] w-[256px] shadow-br2xl  rounded-3xl flex justify-center items-center'>
                        <Image alt='smile' src="/sentiment_satisfied.svg" width={100} height={100}></Image>
                    </div>
                        <h1 className='text-[32px] font-bold'>Branding</h1>
                        <p>We meticulously structure the website layout to optimize user experience.</p>
                </div>
            </div>
            <h1>{whoWeAre}</h1>
            <h1>{whoWeAre}</h1>

        </div>
    )
}

export default LandingPage