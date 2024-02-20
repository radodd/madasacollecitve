import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex justify-between  bg-drkGreen px-[70px] py-8 w-full gap-4 max-tablet:flex-col 
        max-tablet:justify-center 
        max-tablet:items-center'>
            <div>
                <Image alt='Logo' src="/madasa_logo.svg" width={175} height={200}></Image>
                <p className='text-white font-bold text-4xl'>Collective</p>
            </div>
            <div className='text-right text-white
            max-tablet:text-left'>
                <p>Madasa Collective</p>
                <p>Made in CA</p>
                <p>contact@madasacollective.com</p>
            </div>
        </div>
    )
}

export default Footer