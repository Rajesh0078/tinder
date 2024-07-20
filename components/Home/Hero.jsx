import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[calc(100dvh)] flex items-center px-[5%] md:px-[15%]'>
            <div className='flex justify-center items-center flex-wrap-reverse lg:flex-nowrap md:gap-5 w-full'>
                <div className='lg:basis-1/2 lg:aspect-square flex justify-center flex-col text-center md:text-start lg:pt-16'>
                    <div className='text-[28px] lg:text-[46px] leading-[36px] lg:leading-[60px] font-bold'>
                        Find Your <br className='hidden lg:block' /> Perfect Match with <br className='hidden lg:block' /> Love Capsule
                    </div>
                    <div className='mt-4 md:text-[18px]'>Discover love, connect deeply, and build meaningful relationships</div>
                    <div className='text-white mt-5'>
                        <button className='h-10 lg:h-12 bg-primary px-10 shadow-lg text-[16px] lg:text-[18px]'>Join Now</button>
                    </div>
                </div>
                <div className='lg:basis-1/2 h-auto lg:aspect-square w-full flex'>
                    <div className='lg:ms-auto my-auto'>
                        <Image src={'/assets/couple.png'} width={600} height={600} alt='couple' className='mix-blend-multiply' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero