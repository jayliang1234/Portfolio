import React from 'react';
import pfp from '../assets/pfp.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import FitCheckLogo from '../assets/logo.png'
import Amungo from '../assets/amungo.png'
import League from '../assets/League.png'
import { useState} from "react";
import FitCheckModal from '../modals/Fitcheck.js'
import AmungoModal from '../modals/Amungo.js'
import LeagueModal from '../modals/LeagueAPI.js'
import background from '../assets/background.mp4'
const Home = () => {
    const [FCModal,setFCModal] = useState(false);
    const [AModal,setAModal] = useState(false);
    const [LeagueAPIModal,setLeagueModal] = useState(false);
    const toggleFitcheck = () =>{
        setFCModal(!FCModal);
    }
    const toggleAmungo = () =>{
        setAModal(!AModal);
    }
    const toggleLeagueAPI = () =>{
        setLeagueModal(!LeagueAPIModal);
    }
    return(
        <div>
            {/* Picture */}
            <div className='relative flex w-full h-screen bg-neutral-950 items-center justify-center flex-col'>
                <video className='absolute object-cover w-full h-full' src={background} autoPlay loop muted controls={false}></video>
                <div className='w-[200px] rounded-full min-w-[200px] pointer-events-none select-none'>
                    <img className='relative w-full h-[200px] rounded-full object-cover z-10' alt="myProfile" src={pfp}></img>
                </div>
                <div className='texting text-4xl text-cyan-600 mt-6' style={{ fontFamily: "'Kaushan Script', cursive", transform: 'rotate(-5deg)' }}>
                    ― Jay Liang ―
                </div>
                <div className='relative z-10 text-4x1 text-white mt-6' style={{fontFamily: 'cursive'}}>
                    software engineer
                </div>
            </div>
            {/* About me section */}
            <div className='relative text-red-400 mt-[3%] text-5xl text-center mb-[3%] bg-white' style={{fontFamily: "'Space Mono', Arial, serif"}}>ABOUT ME</div>
            <div className='flex flex-row flex-wrap relative w-full bg-white justify-evenly' style={{fontFamily: "'Space Mono', Arial, serif"}}>
                    <div className='flex flex-col'>
                        <div className='pb-10'>
                            <text className='inline-block font-bold ml-10'>Name: </text>
                            <text className='inline-block ml-[70px] text-gray-400'>Jay Liang</text>
                        </div>
                        <div className='pb-10'>
                            <text className='inline-block font-bold ml-10'>Email: </text>
                            <text className='inline-block ml-[60px] text-gray-400 pb-10'>jay.liang74@myhunter.cuny.edu</text>
                            <div className='max-w-[800px]'>
                                <p className='text-4xl relative 2xl:left-[450px] 2xl:bottom-[130px] ml-10'>Hey, thanks for stopping by! </p>
                            </div>
                            <p className='relative mt-7 w-[50%] 2xl:left-[450px] 2xl:bottom-[130px] ml-10'>I am a recent graduate of Hunter College, where I earned a Bachelor of Arts degree in computer science. My aspiration is to leverage my skills and knowledge as a software engineer in a dynamic and challenging role within a renowned tech company.</p>
                            <div className='relative 2xl:left-[450px] 2xl:bottom-[100px] ml-10 pb-10 max-w-[500px]'>
                                <a href='https://www.linkedin.com/in/jay-liang-205420197/' className='text-red-500 hover:text-blue-500 transition-colors duration-300'><BsLinkedin className='inline-block' size={40}></BsLinkedin></a>
                                <a href='https://github.com/jayliang1234' className='text-red-500 hover:text-blue-500 transition-colors duration-300'><FaGithubSquare className='inline-block ml-2' size={45}></FaGithubSquare></a>
                            </div>
                        </div>
                    </div>
            </div>
            {/* Skills section */}
            <div style={{fontFamily: "'Space Mono', Arial, serif"}}>
                <div className='relative flex justify-center text-5xl pt-[5%] pb-[3%] text-blue-50 bg-neutral-900'>Skills</div>
                <div className='flex relative w-full h-full px-[10%] flex-wrap justify-evenly pb-[5%] bg-neutral-900 text-white'>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>C++</div>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>JS</div>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>HTML</div>
                </div>
                <div className='flex relative w-full h-full px-[10%] flex-wrap justify-evenly pb-[5%] bg-neutral-900 text-white'>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>CSS</div>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>Python</div>
                    <div className='rounded-full min-h-[150px] min-w-[150px] flex items-center justify-center bg-[#008080] text-3xl border-8'>SQL</div>
                </div>
                <div className="text-center bg-neutral-900 text-white text-3xl"> Other Skills </div>
                <div className="text-center bg-neutral-900 text-white text-1xl pb-[5%]"> React.js • Express.js • Firebase • TailwindCSS • API • OpenGL</div>
            </div>
            {/* Projects section */}
            <div className='relative flex justify-center text-5xl bg-white pt-[3%] pb-[3%] text-red-400' style={{fontFamily: "'Space Mono', Arial, serif"}}>Projects</div>
            <div className='flex relative w-full h-full bg-white px-[10%] flex-wrap justify-evenly pb-[5%]'>
                <div className='min-h-[250px] min-w-[250px] w-[250px] flex items-center justify-center bg-slate-950 text-3xl border-8 hover:border-blue-600 transition-colors duration-1000' role='button' onClick={toggleFitcheck}>
                    <img className='w-full h-full object-contain ' alt='FitCheck' src={FitCheckLogo}></img>
                </div>
                <div className='min-h-[250px] min-w-[250px] w-[250px] flex items-center justify-center bg-slate-50 text-3xl border-8 hover:border-blue-600 transition-colors duration-1000' role='button' onClick={toggleAmungo}>
                    <img className='w-full h-full object-contain' alt='Amungo' src={Amungo}></img>
                </div>
                <div className='min-h-[250px] min-w-[250px] w-[250px] flex flex-col items-center justify-center bg-slate-50 text-3xl border-8 hover:border-blue-600 transition-colors duration-1000' role='button' onClick={toggleLeagueAPI}>
                        <img className='w-full h-full object-Fill' alt='League' src={League}></img>
                        <text>League API</text>
                </div>
            </div>
            <FitCheckModal FCModal = {FCModal} setFCModal={setFCModal}/>
            <AmungoModal AModal = {AModal} setAModal={setAModal}/>
            <LeagueModal LeagueAPIModal = {LeagueAPIModal} setLeagueModal={setLeagueModal}/>
        </div>
        
    )
}
export default Home