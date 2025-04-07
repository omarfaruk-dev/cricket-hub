import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='bg-black p-15 rounded-xl mt-10'>
                <div className='relative'>
                    {/* <div className='h-50 w-50 bg-linear-to-r from-cyan-500 to-blue-500'></div> */}
                    {/* <img className='w-200 h-200 absolute -top-80 -right-80 overflow-hidden object-cover blur' src="images/hero-top.png" alt="" />
                    <img className='w-200 h-200 absolute -bottom-80 -left-80 overflow-hidden object-cover blur' src="images/hero-bottom.png" alt="" /> */}
                    <div className='text-center space-y-7'>
                        <img className='mx-auto' src="/images/hero-img.png" alt="hero image" />
                        <h1 className='text-4xl font-bold leading-10 text-white '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <h3 className='text-2xl text-[#ffffff70] font-medium'>Beyond Boundaries Beyond Limits</h3>

                        <button className='m-2 border-2 border-[#E7FE29] rounded-xl'><a className='inline-block m-2 py-3.5 px-5  bg-[#E7FE29] font-bold rounded-xl' href="#">Claim Free Credit</a></button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Hero;


// className='border-2 border-[#E7FE29]'