import React from 'react';
import pfp from '../assets/pfp.png'


const Home = () => {
    return(
        <div className='h-[1500px]'>
            <div className='relative flex w-full h-screen bg-gray-900 items-center justify-center flex-col'>
                <div className='w-[200px] rounded-full min-w-[200px] pointer-events-none select-none'>
                    <img className='w-full h-[200px] rounded-full object-cover' alt="myProfile" src={pfp}></img>
                </div>
                <div className='texting text-4xl text-cyan-600 mt-6' style={{ fontFamily: "'Kaushan Script', cursive", transform: 'rotate(-5deg)' }}>
                    ― Jay Liang ―
                </div>
                <div className='text-4x1 text-white mt-6' style={{fontFamily: 'cursive'}}>
                    software engineer
                </div>
            </div>
            <div className='relative w-full h-[30%] bg-white' style={{fontFamily: "'Space Mono', Arial, serif"}}>
                <ul>
                    <li className='relative text-red-400 mt-32 text-5xl h-[20%] text-center'>ABOUT ME</li>
                    <ul className='ml-20 mt-20'>
                        <li className='inline-block font-bold'>Name: </li>
                        <li className='inline-block ml-[70px] text-gray-400'>Jay Liang</li>
                    </ul>
                    <ul className='ml-20 mt-7'>
                        <li className='inline-block font-bold'>Email: </li>
                        <li className='inline-block ml-[60px] text-gray-400'>jay.liang74@myhunter.cuny.edu</li>
                    </ul>
                    <ul className='relative ml-[600px] bottom-[75px]'>
                        <li className='text-4xl'>Hey, thanks for stopping by! </li>
                        <span className='mt-7 block w-[800px]'>I am a recent graduate of Hunter College, where I earned a Bachelor of Arts degree in computer science. My aspiration is to leverage my skills and knowledge as a software engineer in a dynamic and challenging role within a renowned tech company.</span>
                    </ul>
                </ul>
            </div>

        </div>
        
    )
}
export default Home