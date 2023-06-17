import React from "react";
import { BiX } from "react-icons/bi"


const AmungoModal= ({ AModal, setAModal }) => {
    const toggleModal = () => {
        setAModal(!AModal)
    }
    return(
        <div className={`relative z-10 ${AModal ? "" : "hidden"}`}>
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity -z-10" >
                <div className="relative w-[50%] min-h-[60%] ml-[25%] mt-[10%] z-10 bg-white transition-opacity flex flex-col">
                    <div className="relative self-end" onClick={toggleModal}>
                        <BiX size={28} role="button"></BiX> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AmungoModal