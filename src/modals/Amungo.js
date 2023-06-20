import React from "react";
import { BiX } from "react-icons/bi"
import Amungo from "../assets/Amungo.mp4"
import {FaGithubSquare} from 'react-icons/fa'

const AmungoModal= ({ AModal, setAModal }) => {
    const toggleModal = () => {
        setAModal(!AModal)
    }
    return(
        <div className={`relative z-10 ${AModal ? "" : "hidden"}`} style={{fontFamily: "'Space Mono', Arial, serif"}}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity -z-10" onClick={toggleModal}>
            </div>
            <div className="fixed w-[50%] min-h-[60%] left-[25%] top-[20%] mobile:w-[90%] mobile:left-[5%] bg-white transition-opacity flex flex-col rounded-sm">
                <div className="relative flex w-full">
                    <div className="flex-grow"></div>
                    <div className="flex-grow text-2xl ml-6 font-bold">Amungo</div>
                    <BiX className="self-end" size={28} role="button" onClick={toggleModal}></BiX>
                </div>
                <div className="relative flex w-[90%] flex-wrap ml-2 pt-5">
                    Amungo is a game similar to DinoRun where the objective of the game is to survive as long as possible. I created this game using a game engine we created in my gameengines class.
                </div>
                <div className="text-3xl self-center pt-1 font-bold">Gameplay</div>
                <video className="w-[60%] bg-black self-center" src={Amungo} autoPlay loop muted controls></video>
                <div className="mt-5 ml-2"> Technologies used: OpenGL, Glad, Stbi, Glfw, Cmake</div>
                <div className="ml-2">
                More info: <a className='relative text-red-500 hover:text-blue-500 transition-colors duration-300' href='https://github.com/jayliang1234/Amungo'><FaGithubSquare className='inline-block ml-2' size={40}></FaGithubSquare></a>
                </div>
            </div>
        </div>
    );
}
export default AmungoModal