import React, { RefObject } from 'react';

interface BookProps{
    active:boolean;
    reference:RefObject<HTMLDivElement>
    title:string;
    images:string[]
    text:string[];

}
const Book:React.FC<BookProps> = ({images,text,title,active,reference}) => {
  return (
    <div className={`book ${active ? 'opacity-100 ':'opacity-0 scale-[5%]'} mx-auto lg:w-[35%] mobile:w-11/12 hover:lg:translate-x-[50%] hover:translate-x-0 my-[300px]  transition transform ease-in-out duration-700` } ref={reference}>
        <div className="cover mobile:w-full flex flex-col items-center justify-center text-white">
            <h2 className='text-2xl font-bold'>
                {title}
            </h2>
        </div>
        <div className="page mobile:w-[95%]"></div>
        <div className="page mobile:w-[95%]"></div>
        <div className="page mobile:w-[95%]"></div>
        <div className="page flex flex-col items-center justify-center text-black mobile:w-[95%]">
            
        </div>
        <div className="last-page flex flex-col items-center justify-center mobile:w-[95%]">
        <div className="cube-container justify-start items-center ">
            {images.map((image,index)=>(
               <div className='flex flex-col items-center justify-center' key={index+1}>
                <div className="cube flex flex-col items-center justify-center mx-6 my-3">
                    <img src={image} alt="" className='object-cover rounded-lg w-full h-auto' />
                </div>
                <h4 className='text-sm font-bold'>{text[index]}</h4>
               </div>
                
            ))}
            </div>
        </div>
        <div className="back-cover mobile:w-full"></div>
    </div>
  );
};

export default Book;