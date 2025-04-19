import React from 'react';
import { assets, features } from '../assets/assets';

const BottomBanner = () => {
    return (
        <div className='relative mt-24 class="flex items-center justify-between px-6  lg:px-20 xl:px-32 py-4 border-b border-gray-300 bg-white "'>
            <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' />
            <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />

            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 mb-4 lg:px-40 xl:px-50'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold text-primary'>Why We Are The Best ?</h1>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 mt-2'>
                            <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                            <div>
                            <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                            <p className=' text-green-500/70 text-xs md:text-sm'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomBanner; 