import React from "react";
import { BiX } from "react-icons/bi"
import {FaGithubSquare} from 'react-icons/fa'
import Champions from '../assets/Champions.png'
const LeagueModal= ({ LeagueAPIModal, setLeagueModal }) => {
    const toggleModal = () => {
        setLeagueModal(!LeagueModal)
    }
    return(
        <div className={`relative z-10 ${LeagueAPIModal ? "" : "hidden"}`} style={{fontFamily: "'Space Mono', Arial, serif"}}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity -z-10" onClick={toggleModal}>
            </div>
            <div className="fixed w-[50%] left-[25%] top-[20%] bg-white transition-opacity flex flex-col rounded-sm">
                <div className="relative flex w-full">
                    <div className="flex-grow"></div>
                    <div className="flex-grow text-2xl ml-6 font-bold">LeagueAPI</div>
                    <BiX className="self-end" size={28} role="button" onClick={toggleModal}></BiX>
                </div>
                <div className="relative flex w-[90%] flex-wrap ml-2 pt-5">
                    Using MySQL Workbench and MySQL Servers, along with Visual Studio's ASP.NET Core Web API template. I was able to Develop a comprehensive League of Legends API, encompassing two tables: Champions and Abilities.
                </div>
                <div className="flex justify-evenly">
                    <div className="text-3xl self-center pt-1 font-bold">Champions endpoint</div>
                </div>
                <div className="flex justify-evenly w-full h-full">
                    <img className="object-cover" alt="champions" src={Champions}></img>
                </div>
                <div className="mt-5 ml-2"> Technologies used: PostMan, MySQL Workbench/Server, ASP.NET Core Web API </div>
                <div className="ml-2">
                    More info: <a className='relative text-red-500 hover:text-blue-500 transition-colors duration-300' href='https://github.com/jayliang1234/LeagueChampionsAPI'><FaGithubSquare className='inline-block ml-2' size={40}></FaGithubSquare></a>
                </div>
            </div>
        </div>
    );
}
export default LeagueModal