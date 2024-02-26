import Navbar from '@/sections/Navbar'
import Designers from '@/sections/our-team/Designers'
import Hero from '@/sections/our-team/Hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Designers/>
        </div>
    )
}

export default page