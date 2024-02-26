import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-full h-full'>
            <div style={{ backgroundImage: 'url("/our-team.svg")' }} className='max-w-[1400px] h-full'>
                {/* <Image alt='out team' src="/our-team.svg" width={1512} height={632}/> */}
            </div>
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Our Team</h1>
        </div>
    )
}

export default Hero