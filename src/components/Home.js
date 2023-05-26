import React from 'react';
import pfp from '../assets/pfp.png'

const Home = () => {
    return(
        <div className='h-[1500px] overflow-y-auto'>
            <div className='relative flex w-full h-[900px] bg-gray-900 items-center justify-center flex-col'>
                <div className='w-[250px] h-[250px] rounded-full min-w-[250px] pointer-events-none select-none'>
                    <img className='w-[250px] h-[250px] rounded-full object-cover' alt="myProfile" src={pfp}></img>
                </div>
                <div className='text-4xl text-cyan-600 mt-6' style={{fontFamily: 'cursive', transform: 'rotate(-5deg)'}}>
                    ―Jay Liang―
                </div>
            </div>

        </div>
        
    )
}
export default Home