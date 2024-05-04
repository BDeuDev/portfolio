import React,{ RefObject } from "react";



interface BackendProps {
    active:boolean;
    reference:RefObject<HTMLDivElement>
    image:string[];
    text:string[];
    title:string[]
    index:number
}

const Skills:React.FC<BackendProps> = ({active,reference,image,text,title,index}) => {

    return (
        <div className={`flex flex-col   bg-[#111c30]  my-[2.5%] mx-[15%] h-auto w-auto  rounded-lg shadow-xl  transition transform ease-in-out duration-700 ${active ? 'opacity-100 translate-x-0':'opacity-0 scale-[5%]'}`} ref={reference}>
                <div className="w-full h-full  flex flex-col justify-center items-center ">
                    <h1 className="text-white text-3xl p-3 mt-3 cursor-pointer  transition transform ease-in-out duration-300 ">
                        {title[index]}
                    </h1>
                </div>
                <div className="w-auto h-full  flex flex-wrap items-center justify-center p-7">
                   
                         {image.map((images,index)=>(
                            <div key={index + 1} className="my-5 mx-5 cursor-pointer hover:scale-100 transition transform ease-in-out duration-300 scale-90">
                            <div className={`w-[65px] h-[65px] my-5 rounded-2xl mx-5 `} >
                                <img src={images} alt="" className={`object-cover w-full h-auto rounded-2xl`} />
                                
                            </div>
                            <p className="text-sm text-white block font-bold text-center ">{text[index]}</p>
                        </div>
                        ))}
                        
                  
                </div>
                
            </div>
    )
}
export default Skills;