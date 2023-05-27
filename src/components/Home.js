import React from 'react';
import pfp from '../assets/pfp.png'


const Home = () => {
    return(
        <div className='h-[1500px] overflow-y-auto'>
            <div className='relative flex w-full h-screen bg-gray-900 items-center justify-center flex-col'>
                <div className='w-[200px] h-[200px] rounded-full min-w-[200px] pointer-events-none select-none'>
                    <img className='w-[200px] h-[200px] rounded-full object-cover' alt="myProfile" src={pfp}></img>
                </div>
                <div className='texting text-4xl text-cyan-600 mt-6' style={{ fontFamily: "'Kaushan Script', cursive", transform: 'rotate(-5deg)' }}>
                    ― Jay Liang ―
                </div>
            </div>

        </div>
        
    )
}
export default Home