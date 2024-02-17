import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex justify-between bg-[#486B5C] px-[70px] py-8 h-[130px] w-full'>
            <div>
                <Image alt='Logo' src="/madasa_logo.svg" width={175} height={200}></Image>
                <p className='text-white font-bold text-4xl'>Collective</p>
            </div>
            <div className='text-right text-white'>
                <p>Madasa Collective</p>
                <p>Made in CA</p>
                <p>contact@madasacollective.com</p>
            </div>
        </div>
    )
}

export default Footer