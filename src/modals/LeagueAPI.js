import React from "react";
import { BiX } from "react-icons/bi"


const LeagueModal= ({ LeagueAPIModal, setLeagueModal }) => {
    const toggleModal = () => {
        setLeagueModal(!LeagueModal)
    }
    return(
        <div className={`relative z-10 ${LeagueAPIModal ? "" : "hidden"}`}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity -z-10" onClick={toggleModal}>
            </div>
            <div className="fixed w-[50%] min-h-[60%] left-[25%] top-[25%] z-10 bg-white transition-opacity flex flex-col">
                <div className="relative self-end" onClick={toggleModal}>
                    <BiX size={28} role="button"></BiX>
                </div>
            </div>
        </div>
    );
}
export default LeagueModal