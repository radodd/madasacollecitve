import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex  justify-between px-70 mb-20 w-full items-center'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[40px]'>Let&apos;s make something amazing together</h1>
                    <p className='text-2xl'>Request a free discovery call.</p>
                    <button className='bg-[#6255F3] text-white rounded-full w-[164px] h-[54px]'>View Website</button>
                </div>
                <Image alt='schedule call' src="/schedule-call.png" width={395} height={100}/>
            </div>
  )
}

export default Contact