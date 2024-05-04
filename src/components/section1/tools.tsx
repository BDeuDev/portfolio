import React,{ RefObject, useEffect, useState } from "react";
import {  backend,  textBackend } from "../../gateways/skills";


interface BackendProps {
    active:boolean;
    reference:RefObject<HTMLDivElement>
}

const Backend:React.FC<BackendProps> = ({active,reference}) => {

    return (
        <div className={`flex flex-col   bg-[#0a101b]  absolute left-[15%] h-auto right-[15%] w-auto mt-[7%] rounded-lg shadow-xl  transition transform ease-in-out duration-700 ${active ? 'opacity-100 translate-x-0':'opacity-0 scale-[5%]'}`} ref={reference}>
                <div className="w-full h-full  flex flex-col justify-center items-center ">
                    <h1 className="text-white text-3xl p-3 mt-3 cursor-pointer  transition transform ease-in-out duration-300 ">
                        Backend
                    </h1>
                </div>
                <div className="w-auto h-full  flex flex-wrap items-center justify-center p-7">
                    {backend.map((img, index) => (
                        <div key={index + 1} className="my-5 mx-5 cursor-pointer hover:scale-100 transition transform ease-in-out duration-300 scale-90">
                            <div className={`w-[65px] h-[65px] my-5 rounded-2xl mx-5 bg-[#0a101b]`} >
                                <img src={img} alt="" className={`object-cover w-full ${textBackend[index] === "Sequelize" || textBackend[index] === "Python" ? "" : "h-full"} rounded-2xl`} />
                                
                            </div>
                            <p className="text-sm text-white block font-bold text-center ">{textBackend[index]}</p>
                        </div>
                    ))}
                </div>
                
            </div>
    )
}
export default Backend;