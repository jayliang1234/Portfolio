import React from "react";
import { BiX } from "react-icons/bi"
import FitCheckDemo from '../assets/FitCheckDemo.mp4'

const FitCheckModal= ({ FCModal, setFCModal }) => {
    const toggleModal = () => {
        setFCModal(!FCModal)
    }
    return(
        <div className={`relative z-10 ${FCModal ? "" : "hidden"}`} style={{fontFamily: "'Space Mono', Arial, serif"}}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity -z-10" onClick={toggleModal}>
            </div>
            <div className="fixed w-[50%] min-h-[60%] left-[25%] top-[20%] bg-white transition-opacity flex flex-col rounded-sm">
                <div className="relative flex w-full">
                    <div className="flex-grow"></div>
                    <div className="flex-grow text-2xl ml-2 font-bold">Fitcheck</div>
                    <BiX className="self-end" size={28} role="button" onClick={toggleModal}></BiX>
                </div>
                <div className="relative flex w-[90%] flex-wrap ml-2 pt-5">
                    FitCheck is a social media and fashion image board similar to Instagram and Pinterest that recommends clothes and fashion styles. User can view, comment, like, post and follow other people on FitCheck. Fitcheck is fashion themed and only allows users to post images related to clothing, outfits and fashion. 
                </div>
                <div className="text-3xl self-center pt-1 font-bold">Short Demo</div>
                <video className="w-[60%] bg-black self-center" src={FitCheckDemo} autoPlay loop muted controls></video>
                <div className="mt-4 ml-2"> Technologies used: React.js, Express.js, Firebase Auth/Storage, Google Vision API, TailwindCSS</div>
            </div>
        </div>
    );
}
export default FitCheckModal
/*<div className={`relative z-10 ${modal ? "" : "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity -z-10" onClick={() => toggleModal(modal,setModal)}>
                <div className="fixed overflow-y-auto">
                    <div className='fixed bg-[#D9D9D9] top-[5%] left-[18%] w-[68%] h-[88%] rounded-3xl inline-block'> 
                        <TfiArrowLeft onClick={() => toggleModal(modal,setModal)} size={28} className="relative left-2 top-2 cursor-pointer"/>
                        
                        </div>
                    </div>
                </div>
        </div>*/