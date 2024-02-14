import React from 'react'
import { whoWeAre } from '..'

const LandingPage = () => {
    return (
        <div className='flex flex-col  items-center mt-[104px] gap-104px'>
            <div className='w-[1140px] text-center'>
                <h1>{whoWeAre}</h1>
            </div>
            <div className='flex justify-between gap-6'>
                <button className='py-4 px-8 border-black border rounded-full'>How We Work</button>
                <button className='py-4 px-8 bg-black text-white border-black border rounded-full'>Contact Us</button>
            </div>
            <h1>{whoWeAre}</h1>
            <h1>{whoWeAre}</h1>

        </div>
    )
}

export default LandingPage